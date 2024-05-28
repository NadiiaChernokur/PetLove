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
  return (
    <ModalBackground>
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
