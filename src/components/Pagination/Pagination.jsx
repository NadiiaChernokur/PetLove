import { useEffect, useState } from 'react';
import {
  PageButton,
  PageSpan,
  PageSpanActiv,
  Pages,
  Pagination,
} from './Pagination.styled';
import sprite from '../../img/sprite.svg';

const Paginations = ({ subtract, add, page, first, last, total }) => {
  const [getTotal, setTotal] = useState(0);
  useEffect(() => {
    setTotal(total);
  }, [total]);
  const pegeGetTotal = page === getTotal ? '0.5' : '1.0';
  const pegeGetFirst = page === 1 ? '0.5' : '1.0';
  return (
    <Pagination key={total}>
      <PageButton onClick={first} disabled={page === 1}>
        <svg
          width="20"
          height="20"
          style={{
            transform: 'scaleX(-1)',
            marginRight: '-12px',
            fillOpacity: pegeGetFirst,
          }}
        >
          <use href={`${sprite}#fi-rr-angle-small-left`}></use>
        </svg>
        <svg
          width="20"
          height="20"
          style={{ transform: 'scaleX(-1)', fillOpacity: pegeGetFirst }}
        >
          <use href={`${sprite}#fi-rr-angle-small-left`}></use>
        </svg>
      </PageButton>
      <PageButton onClick={subtract} disabled={page === 1}>
        <svg
          width="20"
          height="20"
          style={{
            transform: 'scaleX(-1)',
            fillOpacity: pegeGetFirst,
          }}
        >
          <use href={`${sprite}#fi-rr-angle-small-left`}></use>
        </svg>
      </PageButton>
      <Pages>
        {page - 1 > 0 && <PageSpan>{page - 1}</PageSpan>}
        <PageSpanActiv> {page} </PageSpanActiv>
        {page !== getTotal && <PageSpan> {page + 1} </PageSpan>}
        {page !== getTotal && <PageSpan> {'...'} </PageSpan>}
      </Pages>
      <PageButton onClick={add} disabled={page === getTotal}>
        <svg width="20" height="20" style={{ fillOpacity: pegeGetTotal }}>
          <use href={`${sprite}#fi-rr-angle-small-left`}></use>
        </svg>
      </PageButton>
      <PageButton onClick={last} disabled={page === getTotal}>
        <svg
          width="20"
          height="20"
          style={{ marginRight: '-12px', fillOpacity: pegeGetTotal }}
        >
          <use href={`${sprite}#fi-rr-angle-small-left`}></use>
        </svg>
        <svg width="20" height="20" style={{ fillOpacity: pegeGetTotal }}>
          <use href={`${sprite}#fi-rr-angle-small-left`}></use>
        </svg>
      </PageButton>
    </Pagination>
  );
};
export default Paginations;
