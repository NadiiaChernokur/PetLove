import { AttentionModalImg } from './AttentionModal.styled';
import { LearnMoreModalAdd, ModalBackground } from './LearnMoreModal.styled';
import {
  LeavingModalButtons,
  LeavingModalCancel,
  LeavingModalContainer,
  LeavingModalTitel,
} from './LeavingModal.styled';

const LeavingModal = ({ close }) => {
  return (
    <ModalBackground>
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
