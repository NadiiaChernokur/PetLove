import styled from 'styled-components';

export const HeaderContainer = styled.div`
  min-width: 1282px;
  padding: 32px 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`;
