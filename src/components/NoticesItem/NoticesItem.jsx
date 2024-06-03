import { useEffect, useState } from 'react';
import {
  AnimalInformation,
  AnimalInformationAbout,
  AnimalInformationAboutDiv,
  AnimalInformationHeader,
  Buttons,
  Information,
  KindOfAnimal,
  KindOfAnimalStar,
  LearnMore,
  LikeButton,
  NoticesImg,
  NoticesItemContainer,
  NoticesItemImg,
  NoticesItemList,
} from './NoticesItem.styled';
import LearnMoreModal from '../Modals/LearnMoreModal';
import sprite from '../../img/sprite.svg';
import {
  getCurrentUser,
  safeToken,
  toFavoriteAdd,
  toFavoriteRemove,
} from '../../redux/operation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NoticesItem = ({ array, del }) => {
  console.log(array);
  const [isShowModal, setIsShowModal] = useState(false);
  const [pet, setPet] = useState([]);
  const [heartClick, setHeartClick] = useState([]);

  // const [userDataFavorId, setUserDataFavorId] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const storedUserData = localStorage.getItem('petLoveUserData');
      console.log(storedUserData);
      if (storedUserData) {
        const user = JSON.parse(storedUserData);
        console.log(user.token);
        safeToken(user.token);
        const res = await dispatch(getCurrentUser());
        if (res.payload.noticesFavorites.length > 0) {
          const favoriteIds = res.payload.noticesFavorites.map(
            (item) => item._id
          );
          setHeartClick(favoriteIds);
        }

        console.log(res.payload.noticesFavorites);
      } else {
        navigate('/login');
      }
    };
    fetchUser();
  }, [dispatch, navigate]);

  const showModal = (item) => {
    setIsShowModal(true);
    setPet(item);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  // const toHeartClick = (id) => {
  //   console.log(id);
  //   setHeartClick(!heartClick);
  // };
  const toggleHeartClick = async (id) => {
    console.log(id);
    console.log(heartClick);
    try {
      let updatedFavorites;
      if (heartClick.includes(id)) {
        await dispatch(toFavoriteRemove(id));
        updatedFavorites = heartClick.filter((itemId) => itemId !== id);
      } else {
        await dispatch(toFavoriteAdd(id));
        updatedFavorites = [...heartClick, id];
      }
      setHeartClick(updatedFavorites);
    } catch (error) {
      console.error('Error updating favorite item', error);
    }
  };
  const deleteClick = async (id) => {
    await dispatch(toFavoriteRemove(id));
    window.location.reload();
  };
  return (
    <NoticesItemContainer>
      {array?.map((item) => (
        <NoticesItemList key={item._id}>
          <NoticesItemImg>
            <NoticesImg src={item.imgURL} alt={item.title}></NoticesImg>
          </NoticesItemImg>
          <KindOfAnimal>
            <p>{item.title}</p>
            <KindOfAnimalStar>
              <svg width="20" height="20">
                <use href={`${sprite}#star`}></use>
              </svg>
              <p>{item.popularity}</p>
            </KindOfAnimalStar>
          </KindOfAnimal>
          <AnimalInformation>
            <div>
              <AnimalInformationHeader>Name</AnimalInformationHeader>
              <p>{item.name}</p>
            </div>
            <div>
              <AnimalInformationHeader>Birthday</AnimalInformationHeader>
              <p>{item.birthday}</p>
            </div>
            <div>
              <AnimalInformationHeader>Sex</AnimalInformationHeader>
              <Information>{item.sex}</Information>
            </div>
            <div>
              <AnimalInformationHeader>Species</AnimalInformationHeader>
              <Information>{item.species}</Information>
            </div>
            <div>
              <AnimalInformationHeader>Category</AnimalInformationHeader>
              <Information>{item.category}</Information>
            </div>
          </AnimalInformation>
          <AnimalInformationAboutDiv>
            <AnimalInformationAbout>{item.comment}</AnimalInformationAbout>
          </AnimalInformationAboutDiv>
          <Buttons>
            <LearnMore onClick={() => showModal(item)}>Learn more</LearnMore>

            {del ? (
              <LikeButton onClick={() => deleteClick(item._id)}>
                <svg width="20" height="20">
                  <use href={`${sprite}#trash-2`}></use>
                </svg>
              </LikeButton>
            ) : (
              <LikeButton onClick={() => toggleHeartClick(item._id)}>
                {heartClick?.includes(item._id) ? (
                  <svg width="20" height="20">
                    <use href={`${sprite}#hart`}></use>
                  </svg>
                ) : (
                  <svg width="20" height="20">
                    <use href={`${sprite}#heart`}></use>
                  </svg>
                )}
              </LikeButton>
            )}
          </Buttons>
        </NoticesItemList>
      ))}
      {isShowModal && (
        <LearnMoreModal
          pet={pet}
          close={closeModal}
          fav={heartClick.includes(pet._id) ? 'true' : 'false'}
        />
      )}
    </NoticesItemContainer>
  );
};
export default NoticesItem;
