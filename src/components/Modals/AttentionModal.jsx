import { useCallback, useEffect } from 'react';
import {
  AttentionModalContainer,
  AttentionModalImg,
  AttentionModalText,
  AttentionModalTitel,
} from './AttentionModal.styled';
import {
  LearnMoreModalAdd,
  LearnMoreModalButton,
  ModalBackground,
  ModalContainer,
} from './LearnMoreModal.styled';

const AttentionModal = ({ close }) => {
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
      <AttentionModalContainer>
        <AttentionModalImg>
          <svg></svg>
        </AttentionModalImg>
        <AttentionModalTitel>Attention</AttentionModalTitel>
        <AttentionModalText>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </AttentionModalText>
        <div>
          <LearnMoreModalAdd>Log In</LearnMoreModalAdd>
          <LearnMoreModalButton>Registration</LearnMoreModalButton>
        </div>
      </AttentionModalContainer>
    </ModalBackground>
  );
};
export default AttentionModal;
