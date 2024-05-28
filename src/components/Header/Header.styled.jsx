import styled from 'styled-components';

export const HeaderContainer = styled.div`
  min-width: 1282px;
  /* padding: 32px 64px; */
  padding: 32px 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 5;
`;
export const HeaderLogo = styled.h2`
  color: ${({ isHomePage }) => (isHomePage ? '#fff' : '#262626')};
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const NavigationP = styled.p`
  padding: 15px 20px;
  /* border: 1px solid rgba(38, 38, 38, 0.15); */
  border: ${({ isHomePage }) =>
    isHomePage
      ? '1px solid rgba(255, 255, 255, 0.4);'
      : '1px solid rgba(38, 38, 38, 0.15)'};
  border-radius: 30px;
  color: ${({ isHomePage }) => (isHomePage ? '#fff' : '#262626')};
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 8px;
`;
export const ButtonLog = styled.button`
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
export const ButtonReg = styled.button`
  padding: 0 20px;
  height: 50px;
  background: #fff4df;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #f6b83d;
  border: none;
`;
