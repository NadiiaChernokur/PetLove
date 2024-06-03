import { useEffect, useState } from 'react';
import {
  PageButton,
  PageSpan,
  PageSpanActiv,
  Pages,
  Pagination,
} from './Pagination.styled';

const Paginations = ({ subtract, add, page, first, last, total }) => {
  const [getTotal, setTotal] = useState(0);
  useEffect(() => {
    setTotal(total);
  }, [total]);

  return (
    <Pagination key={total}>
      <PageButton onClick={first} disabled={page === 1}>
        {'<<'}
      </PageButton>
      <PageButton onClick={subtract} disabled={page === 1}>
        {'<'}
      </PageButton>
      <Pages>
        {page - 1 > 0 && <PageSpan>{page - 1}</PageSpan>}
        <PageSpanActiv> {page} </PageSpanActiv>
        {page !== getTotal && <PageSpan> {page + 1} </PageSpan>}
        {page !== getTotal && <PageSpan> {'...'} </PageSpan>}
      </Pages>
      <PageButton onClick={add} disabled={page === getTotal}>
        {'>'}
      </PageButton>
      <PageButton onClick={last} disabled={page === getTotal}>
        {'>>'}
      </PageButton>
    </Pagination>
  );
};
export default Paginations;
