import {
  AddPetButton,
  AddPetButtonSpan,
  ErrorMessage,
  FormInput,
  LogoutButton,
  MyInformation,
  MyPets,
  MyPetsDiv,
  ProfileFormContainer,
  ProfileFormDiv,
  ProfileFormFirstDiv,
  ProfileFormImg,
  ProfileFormPhotoInput,
  ProfileFormUser,
  UploadPhotoButton,
  UploadPhotoDiv,
  UploadUserButton,
} from './ProfileForm.styled';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logOut, safeToken } from '../../redux/operation';
import sprite from '../../img/sprite.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyPetsList from '../MyPets/MyPets';
import EditInformationModal from '../Modals/EditInformationModal';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invalid email format'
    )
    .required('Email is required'),
  avatar: yup
    .string()
    .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, 'Invalid URL')
    .required('Avatar URL is required'),
  phone: yup
    .string()
    .matches(/^\+38\d{10}$/, 'Invalid phone number format')
    .required('Phone number is required'),
});

const ProfileForm = () => {
  const [userData, setUserData] = useState([]);
  const [isUploadUserModal, setIsUploadUserModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    // defaultValues: {
    //   name: name,
    //   email,
    //   avatar,
    //   phone,
    // },
  });

  useEffect(() => {
    const fetchUser = async () => {
      const storedUserData = localStorage.getItem('petLoveUserData');
      console.log(storedUserData);
      if (storedUserData) {
        const user = JSON.parse(storedUserData);
        console.log(user.token);
        safeToken(user.token);
        const res = await dispatch(getCurrentUser());
        setUserData(res.payload);

        console.log(res.payload);
      } else {
        navigate('/login');
      }
    };
    fetchUser();
  }, [dispatch, navigate]);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      //   const response = await axios.put('/api/user', data);
      //   onUpdate(response.data); // Оновлення даних користувача в UserBlock
    } catch (error) {
      setError('apiError', { message: error.response.data.message });
    }
  };
  const DownloadImg = () => {
    document.getElementById('avatar').click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(URL.createObjectURL(file));

    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setSelectedFile(blobUrl);
      setValue('avatar', blobUrl);
    }
  };
  const logout = async () => {
    const res = await dispatch(logOut());
    console.log(res);
    if (res.error && res.payload.includes('401')) {
      toast('You are not authorized');
    } else {
      navigate('/home');
    }
  };
  const uploadUserModal = () => {
    setIsUploadUserModal(true);
  };
  const addPetPage = () => {
    navigate('/add-pet');
  };

  return (
    <ProfileFormContainer>
      <ToastContainer toastStyle={{ background: '#f30e0e', color: 'white' }} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileFormFirstDiv>
            <ProfileFormUser>
              User
              <svg width="22" height="22">
                <use href={`${sprite}#icons8_cat-footprint`}></use>
              </svg>
            </ProfileFormUser>
            <UploadPhotoDiv>
              <ProfileFormDiv>
                {userData?.avatar ? (
                  <ProfileFormImg
                    src={userData.avatar}
                    alt="user photo"
                  ></ProfileFormImg>
                ) : (
                  <svg width="50" height="50" fill="aqua">
                    <use href={`${sprite}#user-02`}></use>
                  </svg>
                )}

                <ProfileFormPhotoInput
                  id="avatar"
                  type="file"
                  accept="image/png, image/jpeg, image/gif, image/bmp, image/webp"
                  {...register('avatar')}
                  onChange={handleFileChange}
                />
                {errors.avatar && (
                  <ErrorMessage>{errors.avatar.message}</ErrorMessage>
                )}
              </ProfileFormDiv>
              <UploadPhotoButton type="button" onClick={DownloadImg}>
                Upload photo
              </UploadPhotoButton>
            </UploadPhotoDiv>
            <UploadUserButton onClick={uploadUserModal}>
              <svg width="16" height="16">
                <use href={`${sprite}#edit`}></use>
              </svg>
            </UploadUserButton>
          </ProfileFormFirstDiv>
          <MyInformation>My information</MyInformation>

          <div>
            <label htmlFor="name"></label>
            <FormInput id="name" {...register('name')} value={userData?.name} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>

          <div>
            <label htmlFor="email"></label>
            <FormInput
              id="email"
              {...register('email')}
              value={userData?.email}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>

          <div>
            <label htmlFor="phone"></label>
            <FormInput id="phone" {...register('phone')} placeholder="+380" />
            {errors.phone && (
              <ErrorMessage>{errors.phone.message}</ErrorMessage>
            )}
          </div>

          {errors.apiError && (
            <ErrorMessage>{errors.apiError.message}</ErrorMessage>
          )}
        </form>
        <MyPetsDiv>
          <MyPets>My pets</MyPets>
          <AddPetButton onClick={addPetPage}>
            Add pet <AddPetButtonSpan>+</AddPetButtonSpan>
          </AddPetButton>
        </MyPetsDiv>
        {userData?.pets?.length > 0 && <MyPetsList pets={userData.pets} />}

        <LogoutButton onClick={logout}>Log out</LogoutButton>
      </div>
      {isUploadUserModal && <EditInformationModal user={userData} />}
    </ProfileFormContainer>
  );
};
export default ProfileForm;
