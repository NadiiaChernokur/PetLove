import { useState } from 'react';
import {
  AnimalInformation,
  AnimalInformationAbout,
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
import AttentionModal from '../Modals/AttentionModal';

const NoticesItem = ({ array }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [pet, setPet] = useState([]);

  const showModal = (item) => {
    setIsShowModal(true);
    setPet(item);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  return (
    <NoticesItemContainer>
      {array.map((item) => (
        <NoticesItemList key={item._id}>
          <NoticesItemImg>
            <NoticesImg src={item.imgURL} alt={item.title}></NoticesImg>
          </NoticesItemImg>
          <KindOfAnimal>
            <p>{item.title}</p>
            <KindOfAnimalStar>
              <svg width={16} height={16}></svg>
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
          <AnimalInformationAbout>{item.comment}</AnimalInformationAbout>
          <Buttons>
            <LearnMore onClick={() => showModal(item)}>Learn more</LearnMore>
            <LikeButton></LikeButton>
          </Buttons>
        </NoticesItemList>
      ))}
      {/* {isShowModal && <LearnMoreModal pet={pet} close={closeModal} />} */}
      {isShowModal && <AttentionModal close={closeModal} />}
    </NoticesItemContainer>
  );
};
export default NoticesItem;
