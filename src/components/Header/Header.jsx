import { NavLink, useLocation } from 'react-router-dom';
import {
  ButtonLog,
  ButtonReg,
  ButtonsDiv,
  HeaderContainer,
  HeaderLogo,
  Navigation,
  NavigationP,
} from './Header.styled';

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  if (isHomePage) {
    console.log('99999999');
  } else {
    console.log('555555555');
  }
  return (
    <HeaderContainer>
      <HeaderLogo isHomePage={isHomePage}>
        petl
        <svg width="19" height="17" isHomePage={isHomePage}></svg>
        ve
      </HeaderLogo>
      <Navigation>
        <NavLink to="/news">
          <NavigationP isHomePage={isHomePage}>News</NavigationP>
        </NavLink>
        <NavLink to="/notices">
          <NavigationP isHomePage={isHomePage}>Find pet</NavigationP>
        </NavLink>
        <NavLink to="/friends">
          <NavigationP isHomePage={isHomePage}>Our friends</NavigationP>
        </NavLink>
      </Navigation>
      <ButtonsDiv>
        <ButtonLog isHomePage={isHomePage}> Log In</ButtonLog>
        <ButtonReg isHomePage={isHomePage}>Registration</ButtonReg>
      </ButtonsDiv>
    </HeaderContainer>
  );
};
