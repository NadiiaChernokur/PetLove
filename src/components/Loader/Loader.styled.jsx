import styled from 'styled-components';

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const LoaderContainerInput = styled.div`
  border-radius: 30px;
  padding: 12px;
  width: ${({ $prop }) => $prop}px;
  background: #fff;
  border: none;
`;
