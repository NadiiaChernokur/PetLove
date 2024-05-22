import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  /* margin: 0 5px;
  padding: 5px 10px;
  background-color: ${(props) => (props.active ? '#000' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#000')};
  border: 1px solid #000;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}; */
`;
