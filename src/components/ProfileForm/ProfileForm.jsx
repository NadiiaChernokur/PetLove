import {
  AddPetButton,
  AddPetButtonSpan,
  ErrorMessage,
  FormContainer,
  FormInput,
  LogoutButton,
  MyInformation,
  MyPets,
  MyPetsDiv,
  ProfileFormContainer,
  ProfileFormDiv,
  ProfileFormFirstDiv,
  ProfileFormImg,
  ProfileFormImputDiv,
  ProfileFormPhotoInput,
  ProfileFormUser,
  UploadPhotoButton,
  UploadPhotoDiv,
  UploadUserButton,
} from './ProfileForm.styled';
// import * as yup from 'yup';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import sprsvg from '../../img/sprite2.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/operation';
import sprite from '../../img/sprite.svg';
import sprit from '../../img/user.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyPetsList from '../MyPets/MyPets';
import EditInformationModal from '../Modals/EditInformationModal';
import LeavingModal from '../Modals/LeavingModal';

// const schema = yup.object().shape({
//   name: yup.string().required('Name is required'),
//   email: yup
//     .string()
//     .matches(
//       /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
//       'Invalid email format'
//     )
//     .required('Email is required'),
//   avatar: yup
//     .string()
//     .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, 'Invalid URL')
//     .required('Avatar URL is required'),
//   phone: yup
//     .string()
//     .matches(/^\+38\d{10}$/, 'Invalid phone number format')
//     .required('Phone number is required'),
// });

const ProfileForm = ({ userData }) => {
  // const [userData, setUserData] = useState([]);
  const [isUploadUserModal, setIsUploadUserModal] = useState(false);
  const [isLogOutModal, setIsLogOutModal] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    // handleSubmit,
    // control,
    // setError,
    // setValue,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
    // defaultValues: {
    //   name: name,
    //   email,
    //   avatar,
    //   phone,
    // },
  });

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const storedUserData = localStorage.getItem('petLoveUserData');
  //     console.log(storedUserData);
  //     if (storedUserData) {
  //       const user = JSON.parse(storedUserData);
  //       console.log(user.token);
  //       safeToken(user.token);
  //       const res = await dispatch(getCurrentUser());
  //       setUserData(res.payload);
  //       // console.log(res.payload);
  //       // addArray(res.payload);

  //       console.log(res.payload);
  //     } else {
  //       navigate('/login');
  //     }
  //   };
  //   fetchUser();
  // }, [addArray, dispatch, navigate]);

  // const onSubmit = async (data) => {
  //   try {
  //     console.log(data);

  //   } catch (error) {
  //     setError('apiError', { message: error.response.data.message });
  //   }
  // };
  // const DownloadImg = () => {
  //   document.getElementById('avatar').click();
  // };
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log(URL.createObjectURL(file));

  //   if (file) {
  //     const blobUrl = URL.createObjectURL(file);
  //     setSelectedFile(blobUrl);
  //     setValue('avatar', blobUrl);
  //   }
  // };
  const logout = async () => {
    const res = await dispatch(logOut());
    localStorage.setItem('petLoveUserData', JSON.stringify([]));

    if (res.error && res.payload.includes('401')) {
      toast('You are not authorized');
      navigate('/home');
    } else {
      navigate('/home');
    }
  };
  const uploadUserModal = () => {
    setIsUploadUserModal(true);
  };
  const uploadUserModalClose = () => {
    setIsUploadUserModal(false);
  };
  const addPetPage = () => {
    navigate('/add-pet');
  };
  const logOutModal = () => {
    setIsLogOutModal(true);
  };
  const logOutModalClose = () => {
    setIsLogOutModal(false);
  };

  return (
    <ProfileFormContainer>
      <ToastContainer toastStyle={{ background: '#f30e0e', color: 'white' }} />
      <div>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form>
          <ProfileFormFirstDiv>
            <ProfileFormUser>
              User
              <svg width="18" height="18">
                <use href={`${sprsvg}#people`}></use>
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
                  <svg width="50" height="50">
                    <use href={`${sprit}#userr`}></use>
                  </svg>
                )}

                <ProfileFormPhotoInput
                  id="avatar"
                  type="file"
                  accept="image/png, image/jpeg, image/gif, image/bmp, image/webp"
                  {...register('avatar')}
                  // onChange={handleFileChange}
                />
                {errors.avatar && (
                  <ErrorMessage>{errors.avatar.message}</ErrorMessage>
                )}
              </ProfileFormDiv>
              {/* <UploadPhotoButton type="button" onClick={DownloadImg}> */}
              <UploadPhotoButton type="button" onClick={uploadUserModal}>
                Upload photo
              </UploadPhotoButton>
            </UploadPhotoDiv>
            <UploadUserButton type="button" onClick={uploadUserModal}>
              <svg width="16" height="16">
                <use href={`${sprite}#edit`}></use>
              </svg>
            </UploadUserButton>
          </ProfileFormFirstDiv>
          <MyInformation>My information</MyInformation>
          <FormContainer>
            <ProfileFormImputDiv>
              <label htmlFor="name"></label>
              <FormInput
                id="name"
                {...register('name')}
                value={userData?.name}
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </ProfileFormImputDiv>

            <ProfileFormImputDiv>
              <label htmlFor="email"></label>
              <FormInput
                id="email"
                {...register('email')}
                value={userData?.email}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </ProfileFormImputDiv>

            <ProfileFormImputDiv>
              <label htmlFor="phone"></label>
              <FormInput
                id="phone"
                {...register('phone')}
                placeholder="+380"
                value={userData?.phone}
              />
              {errors.phone && (
                <ErrorMessage>{errors.phone.message}</ErrorMessage>
              )}
            </ProfileFormImputDiv>

            {errors.apiError && (
              <ErrorMessage>{errors.apiError.message}</ErrorMessage>
            )}
          </FormContainer>
        </form>
        <MyPetsDiv>
          <MyPets>My pets</MyPets>
          <AddPetButton onClick={addPetPage}>
            Add pet <AddPetButtonSpan>+</AddPetButtonSpan>
          </AddPetButton>
        </MyPetsDiv>
        {userData?.pets?.length > 0 && <MyPetsList pets={userData.pets} />}

        <LogoutButton onClick={logOutModal}>Log out</LogoutButton>
      </div>
      {isUploadUserModal && (
        <EditInformationModal user={userData} close={uploadUserModalClose} />
      )}
      {isLogOutModal && (
        <LeavingModal close={logOutModalClose} logout={logout} />
      )}
    </ProfileFormContainer>
  );
};
export default ProfileForm;
