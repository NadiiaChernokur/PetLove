import { useState } from 'react';
import { PageButton, Pagination } from './Pagination.styled';

const Paginations = ({ subtract, add, page, first, last }) => {
  const [totalPages, setTotalPages] = useState(1);
  //   const [page, setPage] = useState(1);
  //   if (totalPages <= 1) return null;

  //   const pages = [];
  //   for (let i = 1; i <= totalPages; i++) {
  //     if (i === 1 || i === totalPages || (i >= page - 2 && i <= page + 2)) {
  //       pages.push(
  //         <PageButton key={i} active={i === page} onClick={() => setPage(i)}>
  //           {i}
  //         </PageButton>
  //       );
  //     } else if (
  //       (i === page - 3 && page - 3 > 1) ||
  //       (i === page + 3 && page + 3 < totalPages)
  //     ) {
  //       pages.push(<span key={i}>...</span>);
  //     }
  //   }
  return (
    <Pagination>
      <PageButton onClick={first}>{'<<'}</PageButton>
      <PageButton onClick={subtract}>{'<'}</PageButton>
      {page - 1} {page} {page + 1} {'...'}
      <PageButton onClick={add}>{'>'}</PageButton>
      <PageButton onClick={last}>{'>>'}</PageButton>
    </Pagination>
  );
};
export default Paginations;
