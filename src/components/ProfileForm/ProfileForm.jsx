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

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/operation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyPetsList from '../MyPets/MyPets';

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
  const [photo, setPhoto] = useState();
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
      // navigate('/home');
    }
  };
  return (
    <ProfileFormContainer>
      <ToastContainer toastStyle={{ background: '#f30e0e', color: 'white' }} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileFormFirstDiv>
            <ProfileFormUser>User</ProfileFormUser>
            <UploadPhotoDiv>
              <img src={photo} alt="" />
              <ProfileFormImg>
                <svg></svg>
              </ProfileFormImg>
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

              <UploadPhotoButton type="button" onClick={DownloadImg}>
                Upload photo
              </UploadPhotoButton>
            </UploadPhotoDiv>
            <UploadUserButton>
              <svg></svg>
            </UploadUserButton>
          </ProfileFormFirstDiv>
          <MyInformation>My information</MyInformation>

          <div>
            <label htmlFor="name"></label>
            <FormInput id="name" {...register('name')} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>

          <div>
            <label htmlFor="email"></label>
            <FormInput id="email" {...register('email')} />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>

          <div>
            <label htmlFor="phone"></label>
            <FormInput id="phone" {...register('phone')} />
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
          <AddPetButton>
            Add pet <AddPetButtonSpan>+</AddPetButtonSpan>
          </AddPetButton>
        </MyPetsDiv>
        <MyPetsList />
        <LogoutButton onClick={logout}>Log out</LogoutButton>
      </div>
    </ProfileFormContainer>
  );
};
export default ProfileForm;
