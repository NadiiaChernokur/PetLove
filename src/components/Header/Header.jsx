import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  ButtonLog,
  ButtonLogOut,
  ButtonReg,
  ButtonsAuthDiv,
  ButtonsAuthP,
  ButtonsAuthSvgDiv,
  ButtonsDiv,
  HeaderContainer,
  HeaderLogo,
  HeaderLogoSvg,
  Navigation,
  NavigationP,
} from './Header.styled';
import sprite from '/src/img/sprite.svg';
import sprit from '/src/img/user.svg';
import { useEffect, useState } from 'react';
import { getCurrentUser, logOut, safeToken } from '../../redux/operation';
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {
  const [isUserRegster, setIsUserRegister] = useState(false);
  const [userName, setUserName] = useState();
  const data = useSelector((state) => state.logIn);
  console.log(data);
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      const storedUserData = localStorage.getItem('petLoveUserData');

      if (storedUserData) {
        const user = JSON.parse(storedUserData);
        safeToken(user.token);
        const res = await dispatch(getCurrentUser());
        if (res.payload._id) {
          setIsUserRegister(true);
          setUserName(res.payload.name);
        }

        console.log(res.payload);
      }
    };
    fetchUser();
  });
  const toLogOut = async () => {
    const res = await dispatch(logOut());
    console.log(res);
    localStorage.setItem('petLoveUserData', JSON.stringify([]));
    navigate('/home');
  };

  return (
    <HeaderContainer>
      <NavLink to="/home">
        <HeaderLogo isHomePage={isHomePage}>
          petl
          <HeaderLogoSvg isHomePage={isHomePage}>
            <use href={`${sprite}#hart`}></use>
          </HeaderLogoSvg>
          {/* <svg width="19" height="17" isHomePage={isHomePage}></svg> */}
          ve
        </HeaderLogo>
      </NavLink>
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
      {!isUserRegster || data.length === 0 ? (
        <ButtonsDiv>
          <NavLink to="/login">
            <ButtonLog isHomePage={isHomePage}> Log In</ButtonLog>
          </NavLink>
          <NavLink to="/register">
            <ButtonReg isHomePage={isHomePage}>Registration</ButtonReg>
          </NavLink>
        </ButtonsDiv>
      ) : (
        <ButtonsAuthDiv>
          <NavLink>
            <ButtonLogOut onClick={toLogOut} isHomePage={isHomePage}>
              Log out
            </ButtonLogOut>
          </NavLink>
          <NavLink to="/profile">
            <ButtonsAuthSvgDiv isHomePage={isHomePage}>
              <svg width="24" height="24">
                <use href={`${sprit}#userr`}></use>
              </svg>
            </ButtonsAuthSvgDiv>
          </NavLink>
          <NavLink to="/profile">
            <ButtonsAuthP>{userName || data.name}</ButtonsAuthP>
          </NavLink>
        </ButtonsAuthDiv>
      )}
    </HeaderContainer>
  );
};
