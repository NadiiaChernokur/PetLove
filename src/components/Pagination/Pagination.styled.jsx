import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
`;

export const PageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 1px solid rgba(38, 38, 38, 0.2);
  background: none;
  /* font-weight: 700;
  font-size: 18px;
  line-height: 122%; */
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    justify-content: center;
  }
`;
export const Pages = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 16px;
  @media screen and (max-width: 767px) {
    margin: 0;
  }
`;

export const PageSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 1px solid rgba(38, 38, 38, 0.2);
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 122%;
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;
export const PageSpanActiv = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: none;
  background: #f6b83d;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  line-height: 122%;
  text-align: center;
`;
