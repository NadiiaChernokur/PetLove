import { useEffect, useState } from 'react';
import {
  FavoritePetsButton,
  FavoritePetsButtons,
  FavoritePetsContainer,
  FavoritePetsEmptyArray,
  FavoritePetsEmptyArraySpan,
} from './FavoritePets.styled';
import NoticesItem from '../NoticesItem/NoticesItem';

const FavoritePets = ({ favoritsPets }) => {
  console.log(favoritsPets);
  const [activeButton, setActiveButton] = useState('favorites');
  const [petsArray, setPetsArray] = useState([]);
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
      {petsArray?.length > 0 ? (
        <NoticesItem array={petsArray} del={true} />
      ) : (
        <FavoritePetsEmptyArray>
          Oops,
          <FavoritePetsEmptyArraySpan>
            looks like there aren't any furries
          </FavoritePetsEmptyArraySpan>
          on our adorable page yet. Do not worry! View your pets on the "find
          your favorite pet" page and add them to your favorites.
        </FavoritePetsEmptyArray>
      )}
    </FavoritePetsContainer>
  );
};
export default FavoritePets;
