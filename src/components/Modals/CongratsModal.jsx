import { useCallback, useEffect } from 'react';
import {
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

const CongratsModal = ({ close }) => {
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
      <ModalContainer>
        <AttentionModalImg>
          <svg></svg>
        </AttentionModalImg>
        <AttentionModalTitel>Congrats</AttentionModalTitel>
        <AttentionModalText>
          The first fluff in the favorites! May your friendship be the happiest
          and filled with fun.
        </AttentionModalText>
        <div>
          <LearnMoreModalAdd>Go to profile</LearnMoreModalAdd>
        </div>
      </ModalContainer>
    </ModalBackground>
  );
};
export default CongratsModal;
