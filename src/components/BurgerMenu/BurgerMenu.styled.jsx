import styled from 'styled-components';
export const BurgerContainer = styled.div`
  background: ${({ isHomePage }) => (isHomePage ? '#f6b83d' : '#fff')};
  /* border-radius: 30px; */
  width: 50%;
  height: 100%;
  margin: 0 0 0 50%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const BurgerNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const BurgerNavigationP = styled.p`
  padding: 15px 20px;
  /* border: 1px solid rgba(38, 38, 38, 0.15); */
  border: ${({ isHomePage }) =>
    isHomePage
      ? '1px solid rgba(255, 255, 255, 0.4);'
      : '1px solid rgba(38, 38, 38, 0.15)'};
  border-radius: 30px;
  color: ${({ isHomePage }) => (isHomePage ? '#fff' : '#262626')};
`;

export const BurgenButtonsDiv = styled.div`
  display: flex;
  gap: 8px;
`;
export const BurgenButtonLog = styled.button`
  all: unset;
  padding: 0 35px;
  height: 50px;
  border: ${({ isHomePage }) =>
    isHomePage ? '1px solid rgba(255, 255, 255, 0.4);' : 'none'};
  border-radius: 30px;
  background: #f6b83d;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #fff;
`;
