import {
  LearnMoreModalAdd,
  LearnMoreModalButton,
  LearnMoreModalButtons,
  LearnMoreModalImg,
  LearnMoreModalInf,
  LearnMoreModalInformation,
  LearnMoreModalName,
  LearnMoreModalStars,
  LearnMoreModalText,
  ModalBackground,
  ModalContainer,
} from './LearnMoreModal.styled';

const LearnMoreModal = ({ pet, close }) => {
  console.log(pet);
  return (
    <ModalBackground>
      <ModalContainer>
        <LearnMoreModalImg src={pet.imgURL} alt={pet.title}></LearnMoreModalImg>
        <LearnMoreModalName>{pet.titel}</LearnMoreModalName>
        <LearnMoreModalStars>
          <p>1</p>
        </LearnMoreModalStars>
        <LearnMoreModalInformation>
          <LearnMoreModalInf>
            <p>Name</p>
            <p>{pet.name}</p>
          </LearnMoreModalInf>
          <LearnMoreModalInf>
            <p>Birthday</p>
            <p>{pet.birthday}</p>
          </LearnMoreModalInf>
          <LearnMoreModalInf>
            <p>Sex</p>
            <p>{pet.sex}</p>
          </LearnMoreModalInf>
          <LearnMoreModalInf>
            <p>Species</p>
            <p>{pet.species}</p>
          </LearnMoreModalInf>
        </LearnMoreModalInformation>
        <LearnMoreModalText>{pet.comment}</LearnMoreModalText>
        <LearnMoreModalButtons>
          <LearnMoreModalAdd>Add to</LearnMoreModalAdd>
          <LearnMoreModalButton>Contact</LearnMoreModalButton>
        </LearnMoreModalButtons>
      </ModalContainer>
    </ModalBackground>
  );
};
export default LearnMoreModal;
