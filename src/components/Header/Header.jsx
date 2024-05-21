import {
  ButtonLog,
  ButtonReg,
  ButtonsDiv,
  HeaderContainer,
  Navigation,
  NavigationP,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <h2>
        petl
        <svg width="19" height="17"></svg>
        ve
      </h2>
      <Navigation>
        <NavigationP>News</NavigationP>
        <NavigationP>Find pet</NavigationP>
        <NavigationP>Our friends</NavigationP>
      </Navigation>
      <ButtonsDiv>
        <ButtonLog> Log In</ButtonLog>
        <ButtonReg>Registration</ButtonReg>
      </ButtonsDiv>
    </HeaderContainer>
  );
};
