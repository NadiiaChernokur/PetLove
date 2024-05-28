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
  return (
    <ModalBackground>
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
