import { useCallback, useEffect } from 'react';
import {
  AttentionModalContainer,
  AttentionModalDuttonsDiv,
  AttentionModalImg,
  AttentionModalText,
  AttentionModalTitel,
} from './AttentionModal.styled';
import {
  LearnMoreModalAdd,
  LearnMoreModalButton,
  LearnMoreSvg,
  ModalBackground,
  ModalContainer,
} from './LearnMoreModal.styled';
import { useNavigate } from 'react-router-dom';
import photo from '../../img/dog.png';
import sprit from '../../img/cross.svg';

const AttentionModal = ({ close }) => {
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
  const toLogIn = () => {
    navigate('/login');
  };
  const toRegistration = () => {
    navigate('/register');
  };
  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <AttentionModalContainer>
        <LearnMoreSvg width="24" height="24" onClick={close}>
          <use href={`${sprit}#x-x`}></use>
        </LearnMoreSvg>
        <AttentionModalImg>
          <img src={photo} width={44} height={44}></img>
        </AttentionModalImg>
        <AttentionModalTitel>Attention</AttentionModalTitel>
        <AttentionModalText>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </AttentionModalText>
        <AttentionModalDuttonsDiv>
          <LearnMoreModalAdd onClick={toLogIn}>Log In</LearnMoreModalAdd>
          <LearnMoreModalButton onClick={toRegistration}>
            Registration
          </LearnMoreModalButton>
        </AttentionModalDuttonsDiv>
      </AttentionModalContainer>
    </ModalBackground>
  );
};
export default AttentionModal;
