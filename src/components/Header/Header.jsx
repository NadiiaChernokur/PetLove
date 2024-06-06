import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  BurgerDivSvg,
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
  NavigationBurgerDiv,
  NavigationLink,
  NavigationP,
} from './Header.styled';
import sprite from '/src/img/sprite.svg';
import sprit from '/src/img/user.svg';
import heart from '/src/img/whitehart.svg';
import burger from '/src/img/burger.svg';
import { useEffect, useState } from 'react';
import { getCurrentUser, logOut, safeToken } from '../../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export const Header = () => {
  const [isUserRegster, setIsUserRegister] = useState(false);
  const [userName, setUserName] = useState();
  const [userPhoto, setUserPhoto] = useState();
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const data = useSelector((state) => state.logIn);
  console.log(data);
  const location = useLocation();
  const isHomePage = location.pathname === '/home';
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          setUserPhoto(res.payload.avatar);
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
  const openBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  };
  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  return (
    <HeaderContainer>
      {isBurgerMenuOpen && (
        <BurgerMenu close={closeBurgerMenu} home={isHomePage} />
      )}

      <NavLink to="/home">
        <HeaderLogo isHomePage={isHomePage}>
          petl
          {isHomePage ? (
            <HeaderLogoSvg isHomePage={isHomePage}>
              <use href={`${heart}#heart-circle`}></use>
            </HeaderLogoSvg>
          ) : (
            <HeaderLogoSvg isHomePage={isHomePage}>
              <use href={`${sprite}#hart`}></use>
            </HeaderLogoSvg>
          )}
          ve
        </HeaderLogo>
      </NavLink>
      <Navigation>
        <NavigationLink to="/news" isActive={location.pathname === '/news'}>
          <NavigationP isHomePage={isHomePage}>News</NavigationP>
        </NavigationLink>
        <NavigationLink
          to="/notices"
          isActive={location.pathname === '/notices'}
        >
          <NavigationP isHomePage={isHomePage}>Find pet</NavigationP>
        </NavigationLink>
        <NavigationLink
          to="/friends"
          isActive={location.pathname === '/friends'}
        >
          <NavigationP isHomePage={isHomePage}>Our friends</NavigationP>
        </NavigationLink>
      </Navigation>
      <NavigationBurgerDiv>
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
                {userPhoto ? (
                  <img src={userPhoto}></img>
                ) : (
                  <svg width="24" height="24">
                    <use href={`${sprit}#userr`}></use>
                  </svg>
                )}
              </ButtonsAuthSvgDiv>
            </NavLink>
            <NavLink to="/profile">
              <ButtonsAuthP>{userName || data.name}</ButtonsAuthP>
            </NavLink>
          </ButtonsAuthDiv>
        )}
        <BurgerDivSvg>
          <svg width="36" height="36" onClick={openBurgerMenu}>
            <use href={`${burger}#menu-01`}></use>
          </svg>
        </BurgerDivSvg>
      </NavigationBurgerDiv>
    </HeaderContainer>
  );
};
