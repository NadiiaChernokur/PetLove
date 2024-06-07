import { useEffect, useState } from 'react';
import {
  FavoritePetsButton,
  FavoritePetsButtons,
  FavoritePetsContainer,
  FavoritePetsEmptyArray,
  FavoritePetsEmptyArraySpan,
} from './FavoritePets.styled';
import NoticesItem from '../NoticesItem/NoticesItem';

const FavoritePets = ({ favoritsPets, viewed }) => {
  const [activeButton, setActiveButton] = useState('favorites');
  const [petsArray, setPetsArray] = useState([]);
  // const [myFavoritesArray, setMyFavoritesArray] = useState([]);
  // const dispatch = useDispatch();
  // console.log(pets);

  // useEffect(() => {
  //   setMyFavoritesArray(pets);
  // }, [pets]);

  // const petDelite = async (id) => {
  //   const res = await dispatch(deletePet(id));
  //   console.log(res);
  //   setMyFavoritesArray((prevArray) =>
  //     prevArray.filter((item) => item._id !== id)
  //   );
  // };
  useEffect(() => {
    setPetsArray(favoritsPets);
  }, [favoritsPets]);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  return (
    <FavoritePetsContainer>
      <FavoritePetsButtons>
        <FavoritePetsButton
          active={activeButton === 'favorites'}
          onClick={() => handleButtonClick('favorites')}
        >
          My favorite pets
        </FavoritePetsButton>
        <FavoritePetsButton
          active={activeButton === 'viewed'}
          onClick={() => handleButtonClick('viewed')}
        >
          Viewed
        </FavoritePetsButton>
      </FavoritePetsButtons>
      {activeButton === 'favorites' ? (
        petsArray?.length > 0 ? (
          <NoticesItem array={petsArray} del={true} />
        ) : (
          <FavoritePetsEmptyArray>
            Oops,
            <FavoritePetsEmptyArraySpan>
              looks like there aren&apos;t any furries
            </FavoritePetsEmptyArraySpan>
            on our adorable page yet. Do not worry! View your pets on the
            &#34;find your favorite pet&#34; page and add them to your
            favorites.
          </FavoritePetsEmptyArray>
        )
      ) : (
        <NoticesItem array={viewed} del={true} />
      )}
    </FavoritePetsContainer>
  );
};
export default FavoritePets;
