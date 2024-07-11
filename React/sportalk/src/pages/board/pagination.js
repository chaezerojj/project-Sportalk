import { Button, IconButton } from '@mui/material';
import * as S from './index.Style';
import React from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';


function PaginationCustom({ currentPage, totalPages, onPageChange }) {
	// 페이지 번호 배열 생성
	const pageNumbers=[];
	for (let i=1;i<=totalPages;i++) {
			pageNumbers.push(i);
	}

	return (
			<S.Pagination className="pagination">
					<S.PageItem className={`page-item ${currentPage===1 ? 'disabled':''}`}>
							<IconButton
								className="page-link"
								onClick={()=>onPageChange(currentPage-1)}
								disabled={currentPage===1}
							>
								<ArrowBackIos/>
							</IconButton>
					</S.PageItem>
					{/* 페이지 번호 매핑 */}
					{pageNumbers.map(number => (
							<li key={number} className={`page-item ${currentPage===number ? 'active':''}`}>
								<Button
									className="page-link"
									onClick={()=>onPageChange(number)}
									variant='outline'
								>
									{number}
								</Button>
							</li>
					))}
					{/* 다음 페이지 버튼 */}
					<S.PageItem className={`page-item ${currentPage===totalPages ? 'disabled':''}`}>
						<IconButton
								className="page-link"
								onClick={()=>onPageChange(currentPage+1)}
								disabled={currentPage===totalPages}
						>
							<ArrowForwardIos/>
						</IconButton>
					</S.PageItem>
			</S.Pagination>
	);
};

export default PaginationCustom