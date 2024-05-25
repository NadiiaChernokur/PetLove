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

const NoticesItem = ({ array }) => {
  console.log(array);
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
            <LearnMore>Learn more</LearnMore>
            <LikeButton></LikeButton>
          </Buttons>
        </NoticesItemList>
      ))}
    </NoticesItemContainer>
  );
};
export default NoticesItem;
