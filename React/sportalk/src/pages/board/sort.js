// Sort.js
import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Sort({ onSortChange }) {
  const handleSortChange=(e)=>{
    onSortChange(e.target.value);
  };

  return (
    <FormControl style={{float:"right"}}>
      <InputLabel id="sort-label"/>
      <Select
        labelId="sort-label"
        defaultValue="latest"
        onChange={handleSortChange}
				style={{height:"40px"}}
      >
        <MenuItem value="latest">최신순</MenuItem>
        <MenuItem value="like">좋아요순</MenuItem>
        <MenuItem value="comment">댓글순</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Sort;
