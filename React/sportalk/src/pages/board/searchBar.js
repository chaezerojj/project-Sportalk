import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import * as S from './index.Style';

function SearchBar({onFilter}){
	
	const [inputValue,setInputValue]=useState('')
	const [searchField,setSearchField]=useState("title")
	
	const handleChange=(e)=>{
		setInputValue(e.target.value)
	}
	const handleSearch=()=>{
		onFilter(searchField,inputValue.trim())
		setInputValue("")
	}
	const handleKeyDown=(e)=>{
		if(e.key === 'Enter'){
			handleSearch();
		}
	}
	const handleFieldChange=(e)=>{
		setSearchField(e.target.value)
	}
	return(
		<S.SearchWrap>
			<FormControl style={{marginRight:"10px",display:"flex",alignItems:"center",}}>
				<InputLabel id="search-field-label"/>
				<Select
					labelId="search-field-label"
					value={searchField}
					onChange={handleFieldChange}
					style={{height:"40px"}}
				>
					<MenuItem value="title">제목</MenuItem>
					<MenuItem value="nickName">작성자</MenuItem>	
				</Select>
			</FormControl>
			<TextField
			type="text" 
			variant="outlined"
			placeholder="검색어를 입력하세요"
			value={inputValue}
			onChange={handleChange}
			size="small"
			onKeyDown={handleKeyDown}
			style={{marginRight:"10px",width:"300px"}}
		/>
		<Button 
			variant="outlined"
			onClick={handleSearch}
			style={{height:"40px"}}
		>
			검색
		</Button>
		</S.SearchWrap>
	)
}
export default SearchBar