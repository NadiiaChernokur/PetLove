import { ModalBackground } from './LearnMoreModal.styled';

const AttentionModal = () => {
  return (
    <ModalBackground>
      <div>
        <div>
          <svg></svg>
        </div>
        <p>Attention</p>
        <p>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
        <div>
          <button>Log In</button>
          <button>Registration</button>
        </div>
      </div>
    </ModalBackground>
  );
};
export default AttentionModal;
