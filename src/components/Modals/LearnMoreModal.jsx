import {
  LearnMoreDiv,
  LearnMoreModalAdd,
  LearnMoreModalButton,
  LearnMoreModalButtons,
  LearnMoreModalImg,
  LearnMoreModalInf,
  LearnMoreModalInformation,
  LearnMoreModalName,
  LearnMoreModalStars,
  LearnMoreModalText,
  LearnMoreSvg,
  ModalBackground,
  ModalContainer,
} from './LearnMoreModal.styled';
import sprite from '../../img/heart.svg';
import sprit from '../../img/cross.svg';
import {
  RatingFive,
  RatingFour,
  RatingOne,
  RatingThree,
  RatingTwo,
} from '../Rating/Rating';
const LearnMoreModal = ({ pet, close }) => {
  console.log(pet);
  return (
    <ModalBackground>
      <ModalContainer>
        <LearnMoreSvg width="24" height="24" onClick={close}>
          <use href={`${sprit}#x-x`}></use>
        </LearnMoreSvg>
        <LearnMoreModalImg src={pet.imgURL} alt={pet.title}></LearnMoreModalImg>
        <LearnMoreDiv>{pet.category}</LearnMoreDiv>
        <LearnMoreModalName>{pet.titel}</LearnMoreModalName>
        <LearnMoreModalStars>
          {pet.popularity <= 10 && <RatingOne />}
          {pet.popularity > 10 && pet.popularity <= 20 && <RatingTwo />}
          {pet.popularity > 20 && pet.popularity <= 30 && <RatingThree />}
          {pet.popularity > 40 && pet.popularity <= 50 && <RatingFour />}
          {pet.popularity > 50 && <RatingFive />}
          <p>{pet.popularity}</p>
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
          <LearnMoreModalAdd>
            Add to
            <svg width="20" height="20">
              <use href={`${sprite}#heartW`}></use>
            </svg>
          </LearnMoreModalAdd>
          <LearnMoreModalButton>Contact</LearnMoreModalButton>
        </LearnMoreModalButtons>
      </ModalContainer>
    </ModalBackground>
  );
};
export default LearnMoreModal;
