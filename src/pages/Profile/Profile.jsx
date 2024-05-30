import FavoritePets from '../../components/FavoritePets/FavoritePets';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { ProfileContainer } from './Profile.styled';

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileForm />
      <FavoritePets />
    </ProfileContainer>
  );
};
export default Profile;
