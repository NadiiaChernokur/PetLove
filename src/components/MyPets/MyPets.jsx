import {
  MyPetsBlock,
  MyPetsContainer,
  MyPetsDeliteButton,
  MyPetsImg,
  MyPetsInformation,
  MyPetsInformationP,
  MyPetsLi,
  MyPetsTitle,
} from './MyPets.styled';
import sprite from '../../img/sprite.svg';
import { useDispatch } from 'react-redux';
import { deletePet } from '../../redux/operation';
import { useEffect, useState } from 'react';

const MyPetsList = ({ pets }) => {
  const [myFavoritesArray, setMyFavoritesArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setMyFavoritesArray(pets);
  }, [pets]);

  const petDelite = async (id) => {
    await dispatch(deletePet(id));

    setMyFavoritesArray((prevArray) =>
      prevArray.filter((item) => item._id !== id)
    );
  };

  return (
    <MyPetsContainer>
      {myFavoritesArray?.map((item) => (
        <MyPetsLi key={item._id}>
          <MyPetsBlock>
            <div>
              <MyPetsImg src={item.imgURL}></MyPetsImg>
            </div>
            <div>
              <MyPetsTitle>{item.title}</MyPetsTitle>
              <MyPetsInformation>
                <div>
                  <MyPetsInformationP>Name</MyPetsInformationP>
                  <p>{item.name}</p>
                </div>
                <div>
                  <MyPetsInformationP>Birthday</MyPetsInformationP>
                  <p>{item.birthday}</p>
                </div>
                <div>
                  <MyPetsInformationP>Sex</MyPetsInformationP>
                  <p>{item.sex}</p>
                </div>
                <div>
                  <MyPetsInformationP>Species</MyPetsInformationP>
                  <p>{item.species}</p>
                </div>
              </MyPetsInformation>
            </div>
          </MyPetsBlock>
          <MyPetsDeliteButton onClick={() => petDelite(item._id)}>
            <svg width="18" height="18">
              <use href={`${sprite}#trash-2`}></use>
            </svg>
          </MyPetsDeliteButton>
        </MyPetsLi>
      ))}
    </MyPetsContainer>
  );
};
export default MyPetsList;
