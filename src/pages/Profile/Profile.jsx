import { useEffect, useState } from 'react';
import FavoritePets from '../../components/FavoritePets/FavoritePets';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { ProfileContainer } from './Profile.styled';
import { getCurrentUser, safeToken } from '../../redux/operation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [favoritsPetsArray, setFavoritsPetsArray] = useState([]);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      const storedUserData = localStorage.getItem('petLoveUserData');

      if (storedUserData) {
        const user = JSON.parse(storedUserData);

        safeToken(user.token);
        const res = await dispatch(getCurrentUser());
        setUserData(res.payload);
        setFavoritsPetsArray(res.payload.noticesFavorites);
      } else {
        navigate('/login');
      }
    };
    fetchUser();
  }, [dispatch, navigate]);
  // const toAddFavoritePetsArray = (array) => {
  //   setFavoritsPetsArray(array);
  // };
  return (
    <ProfileContainer>
      <ProfileForm userData={userData} />
      <FavoritePets favoritsPets={favoritsPetsArray} />
    </ProfileContainer>
  );
};
export default Profile;
