import {
  HomeCare,
  HomeContainer,
  HomeFirst,
  HomeSecond,
  HomeText,
  HomeTitel,
} from './Home.styled';
// import photo from '/src/img/dogGirl.png';

const Home = () => {
  return (
    <HomeContainer>
      <HomeFirst>
        <HomeTitel>
          Take good <HomeCare>care</HomeCare> of your small pets
        </HomeTitel>
        <HomeText>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </HomeText>
      </HomeFirst>
      <HomeSecond>{/* <img src={photo}></img> */}</HomeSecond>
    </HomeContainer>
  );
};
export default Home;
