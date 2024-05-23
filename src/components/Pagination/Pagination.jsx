import {
  PageButton,
  PageSpan,
  PageSpanActiv,
  Pages,
  Pagination,
} from './Pagination.styled';

const Paginations = ({ subtract, add, page, first, last, total }) => {
  return (
    <Pagination>
      <PageButton onClick={first} disabled={page === 1}>
        {'<<'}
      </PageButton>
      <PageButton onClick={subtract} disabled={page === 1}>
        {'<'}
      </PageButton>
      <Pages>
        {page - 1 > 0 && <PageSpan>{page - 1}</PageSpan>}
        <PageSpanActiv> {page} </PageSpanActiv>
        {page !== total && <PageSpan> {page + 1} </PageSpan>}
        {page !== total && <PageSpan> {'...'} </PageSpan>}
      </Pages>
      <PageButton onClick={add} disabled={page === total}>
        {'>'}
      </PageButton>
      <PageButton onClick={last} disabled={page === total}>
        {'>>'}
      </PageButton>
    </Pagination>
  );
};
export default Paginations;
