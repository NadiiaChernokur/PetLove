import {
  LearnMoreDiv,
  LearnMoreModalAdd,
  LearnMoreModalButton,
  LearnMoreModalButtons,
  LearnMoreModalImg,
  LearnMoreModalInf,
  LearnMoreModalInfTitle,
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
import { useCallback, useEffect, useState } from 'react';
const LearnMoreModal = ({ pet, close, fav, toggleHeartClick }) => {
  const [isFavorite, setIsFavorite] = useState(fav);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    setIsFavorite(fav);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [fav, handleKeyDown]);

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ModalContainer>
        <LearnMoreSvg width="24" height="24" onClick={close}>
          <use href={`${sprit}#x-x`}></use>
        </LearnMoreSvg>
        <LearnMoreModalImg src={pet.imgURL} alt={pet.title}></LearnMoreModalImg>
        <LearnMoreDiv>{pet.category}</LearnMoreDiv>
        <LearnMoreModalName>{pet.title}</LearnMoreModalName>
        <LearnMoreModalStars>
          {pet.popularity <= 10 && <RatingOne />}
          {pet.popularity > 10 && pet.popularity <= 20 && <RatingTwo />}
          {pet.popularity > 20 && pet.popularity <= 30 && <RatingThree />}
          {pet.popularity > 30 && pet.popularity <= 40 && <RatingFour />}
          {pet.popularity > 40 && <RatingFive />}
          <p>{pet.popularity}</p>
        </LearnMoreModalStars>
        <LearnMoreModalInformation>
          <LearnMoreModalInf>
            <LearnMoreModalInfTitle>Name</LearnMoreModalInfTitle>
            <p>{pet.name}</p>
          </LearnMoreModalInf>
          <LearnMoreModalInf>
            <LearnMoreModalInfTitle>Birthday</LearnMoreModalInfTitle>
            <p>{pet.birthday}</p>
          </LearnMoreModalInf>
          <LearnMoreModalInf>
            <LearnMoreModalInfTitle>Sex</LearnMoreModalInfTitle>
            <p>{pet.sex}</p>
          </LearnMoreModalInf>
          <LearnMoreModalInf>
            <LearnMoreModalInfTitle>Species</LearnMoreModalInfTitle>
            <p>{pet.species}</p>
          </LearnMoreModalInf>
        </LearnMoreModalInformation>
        <LearnMoreModalText>{pet.comment}</LearnMoreModalText>
        <LearnMoreModalButtons>
          {isFavorite === 'true' ? (
            <LearnMoreModalAdd onClick={() => toggleHeartClick(pet._id)}>
              Remove
            </LearnMoreModalAdd>
          ) : (
            <LearnMoreModalAdd onClick={() => toggleHeartClick(pet._id)}>
              Add to
              <svg width="20" height="20">
                <use href={`${sprite}#heartW`}></use>
              </svg>
            </LearnMoreModalAdd>
          )}

          <LearnMoreModalButton>Contact</LearnMoreModalButton>
        </LearnMoreModalButtons>
      </ModalContainer>
    </ModalBackground>
  );
};
export default LearnMoreModal;
