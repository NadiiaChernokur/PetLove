import { NavLink, useLocation } from 'react-router-dom';
import {
  ButtonLog,
  ButtonReg,
  ButtonsDiv,
  HeaderContainer,
  HeaderLogo,
  HeaderLogoSvg,
  Navigation,
  NavigationP,
} from './Header.styled';
import sprite from '/src/img/sprite.svg';

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/home';

  return (
    <HeaderContainer>
      <HeaderLogo isHomePage={isHomePage}>
        petl
        <HeaderLogoSvg isHomePage={isHomePage}>
          <use href={`${sprite}#hart`}></use>
        </HeaderLogoSvg>
        {/* <svg width="19" height="17" isHomePage={isHomePage}></svg> */}
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
        <NavLink to="/login">
          <ButtonLog isHomePage={isHomePage}> Log In</ButtonLog>
        </NavLink>
        <NavLink to="/register">
          <ButtonReg isHomePage={isHomePage}>Registration</ButtonReg>
        </NavLink>
      </ButtonsDiv>
    </HeaderContainer>
  );
};
