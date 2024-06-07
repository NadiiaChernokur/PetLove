import styled from 'styled-components';

export const FavoritePetsContainer = styled.div`
  width: 678px;
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`;

export const FavoritePetsButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`;
export const FavoritePetsButton = styled.button`
  border-radius: 30px;
  padding: 14px;
  width: 142px;
  background: ${(props) => (props.active ? ' #f6b83d' : ' #fff')};
  border: none;
  white-space: nowrap;
`;
export const FavoritePetsEmptyArray = styled.p`
  width: 458px;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #262626;
  margin: auto;
  margin-top: 180px;
`;
export const FavoritePetsEmptyArraySpan = styled.span`
  font-weight: 700;
  color: #f6b83d;
`;
