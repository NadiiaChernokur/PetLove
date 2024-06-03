import { useCallback, useEffect } from 'react';
import { AttentionModalImg } from './AttentionModal.styled';
import { LearnMoreModalAdd, ModalBackground } from './LearnMoreModal.styled';
import {
  LeavingModalButtons,
  LeavingModalCancel,
  LeavingModalContainer,
  LeavingModalTitel,
} from './LeavingModal.styled';

const LeavingModal = ({ close }) => {
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
        <AttentionModalImg>
          <svg></svg>
        </AttentionModalImg>
        <LeavingModalTitel>Already leaving?</LeavingModalTitel>

        <LeavingModalButtons>
          <LearnMoreModalAdd>Yes</LearnMoreModalAdd>
          <LeavingModalCancel>Cancel</LeavingModalCancel>
        </LeavingModalButtons>
      </LeavingModalContainer>
    </ModalBackground>
  );
};
export default LeavingModal;
