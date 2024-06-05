import { NavLink } from 'react-router-dom';
import {
  BurgenButtonLog,
  BurgenButtonsDiv,
  BurgerContainer,
  BurgerNavigation,
  BurgerNavigationP,
} from './BurgerMenu.styled';
import { useCallback, useEffect } from 'react';
import { ModalBackground } from '../Modals/LearnMoreModal.styled';

const BurgerMenu = ({ close, home }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };
  return (
    <ModalBackground>
      <BurgerContainer>
        <div>
          <BurgerNavigation>
            <NavLink to="/news">
              <BurgerNavigationP isHomePage={home}>News</BurgerNavigationP>
            </NavLink>
            <NavLink to="/notices">
              <BurgerNavigationP isHomePage={home}>Find pet</BurgerNavigationP>
            </NavLink>
            <NavLink to="/friends">
              <BurgerNavigationP isHomePage={home}>
                Our friends
              </BurgerNavigationP>
            </NavLink>
          </BurgerNavigation>
        </div>
        <div>
          <BurgenButtonsDiv>
            <NavLink to="/login">
              <BurgenButtonLog isHomePage={home}> Log In</BurgenButtonLog>
            </NavLink>
            <NavLink to="/register">
              <BurgenButtonLog isHomePage={home}>Registration</BurgenButtonLog>
            </NavLink>
          </BurgenButtonsDiv>
        </div>
      </BurgerContainer>
    </ModalBackground>
  );
};
export default BurgerMenu;
