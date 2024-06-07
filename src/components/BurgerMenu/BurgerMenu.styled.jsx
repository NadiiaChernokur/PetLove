import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BurgerContainer = styled.div`
  background: ${({ $isHomePage }) => ($isHomePage ? '#fff' : '#f6b83d')};
  width: 50%;
  height: 100%;
  margin: 0 0 0 50%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  z-index: 101;
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

  border: ${({ $isHomePage }) =>
    $isHomePage
      ? '1px solid rgba(38, 38, 38, 0.4)'
      : '1px solid rgba(255, 255, 255, 0.4)'};
  border-radius: 30px;
  color: ${({ $isHomePage }) => ($isHomePage ? '#262626' : '#fff')};
`;

export const BurgenButtonsDiv = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
export const BurgerButtonDiv = styled.div`
  width: 276px;
  display: flex;
  position: absolute;
  bottom: 20%;
`;
export const BurgenButtonLog = styled.button`
  all: unset;
  padding: 0 35px;
  height: 50px;
  border: ${({ $isHomePage }) =>
    $isHomePage ? '1px solid rgba(255, 255, 255, 0.4);' : ' 1px solid #fff'};
  border-radius: 30px;
  background: #f6b83d;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
export const BurgerButtonReg = styled.button`
  all: unset;
  padding: 0 35px;
  height: 50px;
  border: ${({ $isHomePage }) =>
    $isHomePage ? '1px solid rgba(255, 255, 255, 0.4);' : 'none'};
  border-radius: 30px;
  background: #fff4df;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #f6b83d;
  white-space: nowrap;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
export const BurgerNavigationLink = styled(NavLink)`
  border: ${({ $isActive }) =>
    $isActive ? '1px solid #133eea' : '1px solid rgba(255, 255, 255, 0.4)'};

  border-radius: 30px;
  text-decoration: none;
`;
export const BurgerLogOutDiv = styled.div`
  display: flex;
  position: absolute;
  bottom: 5%;
`;
export const BurgerLogOut = styled.button`
  all: unset;
  padding: 0 35px;
  height: 50px;
  border-radius: 30px;
  background: ${({ $isHomePage }) => ($isHomePage ? '#f6b83d' : '#fff4df')};
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: ${({ $isHomePage }) => ($isHomePage ? '#fff4df' : '#f6b83d')};
`;
