import { useCallback, useEffect } from 'react';
import { AttentionModalImg } from './AttentionModal.styled';
import {
  LearnMoreModalAdd,
  LearnMoreSvg,
  ModalBackground,
} from './LearnMoreModal.styled';
import {
  LeavingModalButtons,
  LeavingModalCancel,
  LeavingModalContainer,
  LeavingModalTitel,
} from './LeavingModal.styled';
import sprit from '../../img/cross.svg';
import photo from '../../img/cat.png';

const LeavingModal = ({ close, logout }) => {
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
    <ModalBackground onClick={handleBackgroundClick}>
      <LeavingModalContainer>
        <LearnMoreSvg width="24" height="24" onClick={close}>
          <use href={`${sprit}#x-x`}></use>
        </LearnMoreSvg>
        <AttentionModalImg>
          <img src={photo} width="44" height="44"></img>
        </AttentionModalImg>
        <LeavingModalTitel>Already leaving?</LeavingModalTitel>

        <LeavingModalButtons>
          <LearnMoreModalAdd onClick={logout}>Yes</LearnMoreModalAdd>
          <LeavingModalCancel onClick={close}>Cancel</LeavingModalCancel>
        </LeavingModalButtons>
      </LeavingModalContainer>
    </ModalBackground>
  );
};
export default LeavingModal;
