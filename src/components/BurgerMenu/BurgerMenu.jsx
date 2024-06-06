import { NavLink, useNavigate } from 'react-router-dom';
import {
  BurgenButtonLog,
  BurgenButtonsDiv,
  BurgerButtonDiv,
  BurgerButtonReg,
  BurgerContainer,
  BurgerNavigation,
  BurgerNavigationP,
} from './BurgerMenu.styled';
import { useCallback, useEffect } from 'react';
import { LearnMoreSvg, ModalBackground } from '../Modals/LearnMoreModal.styled';
import sprit from '../../img/cross.svg';

const BurgerMenu = ({ close, home }) => {
  const navigate = useNavigate();
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
  const toNavigate = (to) => {
    navigate(`/${to}`);
    close();
  };
  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <BurgerContainer isHomePage={home}>
        <LearnMoreSvg width="24" height="24" onClick={close}>
          <use href={`${sprit}#x-x`}></use>
        </LearnMoreSvg>
        <div>
          <BurgerNavigation>
            <NavLink to="/news">
              <BurgerNavigationP
                isHomePage={home}
                onClick={() => toNavigate('news')}
              >
                News
              </BurgerNavigationP>
            </NavLink>
            <NavLink to="/notices">
              <BurgerNavigationP
                isHomePage={home}
                onClick={() => toNavigate('notices')}
              >
                Find pet
              </BurgerNavigationP>
            </NavLink>
            <NavLink to="/friends">
              <BurgerNavigationP
                isHomePage={home}
                onClick={() => toNavigate('friends')}
              >
                Our friends
              </BurgerNavigationP>
            </NavLink>
          </BurgerNavigation>
        </div>
        <BurgerButtonDiv>
          <BurgenButtonsDiv>
            <NavLink to="/login">
              <BurgenButtonLog
                isHomePage={home}
                onClick={() => toNavigate('login')}
              >
                {' '}
                Log In
              </BurgenButtonLog>
            </NavLink>
            <NavLink to="/register">
              <BurgerButtonReg
                isHomePage={home}
                onClick={() => toNavigate('register')}
              >
                Registration
              </BurgerButtonReg>
            </NavLink>
          </BurgenButtonsDiv>
        </BurgerButtonDiv>
      </BurgerContainer>
    </ModalBackground>
  );
};
export default BurgerMenu;
