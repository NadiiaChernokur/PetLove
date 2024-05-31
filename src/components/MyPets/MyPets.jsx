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

const MyPetsList = ({ pets }) => {
  return (
    <MyPetsContainer>
      <MyPetsLi>
        <MyPetsBlock>
          <MyPetsImg></MyPetsImg>
          <div>
            <MyPetsTitle>Golden Retriever Puppies</MyPetsTitle>
            <MyPetsInformation>
              <div>
                <MyPetsInformationP>Name</MyPetsInformationP>
                <p>Daisy</p>
              </div>
              <div>
                <MyPetsInformationP>Birthday</MyPetsInformationP>
                <p>01.10.2022</p>
              </div>
              <div>
                <MyPetsInformationP>Sex</MyPetsInformationP>
                <p>Female</p>
              </div>
              <div>
                <MyPetsInformationP>Species</MyPetsInformationP>
                <p>Dog</p>
              </div>
            </MyPetsInformation>
          </div>
        </MyPetsBlock>
        <MyPetsDeliteButton></MyPetsDeliteButton>
      </MyPetsLi>
    </MyPetsContainer>
  );
};
export default MyPetsList;
