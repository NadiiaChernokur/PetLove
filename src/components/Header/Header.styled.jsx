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
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    max-width: 770px;
    min-width: 770px;
    padding: 32px;
    margin: auto;
  }
`;
export const HeaderLogo = styled.h2`
  display: flex;
  align-items: center;
  color: ${({ isHomePage }) => (isHomePage ? '#fff' : '#262626')};
`;
export const HeaderLogoSvg = styled.svg`
  width: 19px;
  height: 23px;
  fill: ${({ isHomePage }) => (isHomePage ? '#fff' : '#f6b83d')};
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: none;
  }
`;
export const NavigationBurgerDiv = styled.div`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: flex;
    align-items: center;
    gap: 16px;
  }
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
export const ButtonsAuthDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const ButtonsAuthSvgDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #fff4df;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonsAuthP = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #262626;
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
export const ButtonLogOut = styled.button`
  all: unset;
  padding: 0 35px;
  height: 50px;
  display: ${({ isHomePage }) => (isHomePage ? 'none' : 'block')};
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
