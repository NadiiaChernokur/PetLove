import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {
  Edit,
  EditInformationInput,
  EditInformationLabelDiv,
  EditInformationLabelInput,
  EditInformationModalImg,
  EditInformationPhoto,
  ErrorMessage,
  ModalContainer,
  ModalContent,
  ProfileFormModalDiv,
  ProfileFormModalImg,
  Save,
  UploadPhoto,
} from './EditInformationModal.styled';
import { ProfileFormPhotoInput } from '../ProfileForm/ProfileForm.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sprsvg from '../../img/sprite2.svg';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getEditUser } from '../../redux/operation';
const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invalid email address'
    )
    .required('Email is required'),
  avatar: Yup.string().matches(
    /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
    'Invalid URL for avatar'
  ),

  phone: Yup.string().matches(/^\+38\d{10}$/, 'Invalid phone number'),
});

const EditInformationModal = ({ user, onClose }) => {
  const [selectedFile, setSelectedFile] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };
  console.log('99999999999');
  useEffect(() => {
    if (user?.avatar) {
      setValue('avatar', user.avatar);
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await dispatch(getEditUser(data));
      console.log(res);
      if (res.meta.requestStatus === 'fulfilled') {
        navigate('/profile');
      } else {
        toast('You are not authorized');
      }

      // onClose();
    } catch (error) {
      alert('Error updating user: ' + error.message);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const blobUrl = URL.createObjectURL(file);
      const validUrl = blobUrl.replace('blob:', '');
      const url = validUrl + '.png';
      setSelectedFile(blobUrl);
      setValue('avatar', url);
    }
  };

  const handleButtonClick = () => {
    document.getElementById('avat').click();
  };

  return (
    <ModalContainer onClick={handleBackgroundClick}>
      <ToastContainer toastStyle={{ background: '#f30e0e', color: 'white' }} />
      <ModalContent>
        <Edit>Edit information</Edit>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <EditInformationModalImg> */}
          <ProfileFormModalDiv>
            {selectedFile ? (
              <ProfileFormModalImg src={selectedFile} alt="selected photo" />
            ) : user?.avatar ? (
              <ProfileFormModalImg src={user.avatar} alt="user photo" />
            ) : (
              <svg width="50" height="50">
                <use href={`${sprsvg}#user-02`}></use>
              </svg>
            )}

            <ProfileFormPhotoInput
              {...register('avatar')}
              id="avat"
              type="file"
              accept="image/png, image/jpeg, image/gif, image/bmp, image/webp"
              onChange={handleFileChange}
            />
          </ProfileFormModalDiv>
          {/* </EditInformationModalImg> */}
          <EditInformationPhoto>
            <div>
              <EditInformationInput
                value={selectedFile ? selectedFile : user?.avatar || ''}
                readOnly
              />
              {errors.avatar && (
                <ErrorMessage>{errors.avatar.message}</ErrorMessage>
              )}
            </div>
            <UploadPhoto type="button" onClick={handleButtonClick}>
              Upload photo
              <svg width="18" height="18">
                <use href={`${sprsvg}#upload-cloud`}></use>
              </svg>
            </UploadPhoto>
          </EditInformationPhoto>
          <div>
            <EditInformationLabelInput
              id="name"
              {...register('name')}
              defaultValue={user?.name}
              placeholder="Name"
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>
          <div>
            <EditInformationLabelInput
              id="email"
              {...register('email')}
              defaultValue={user?.email}
              placeholder="Email"
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>

          <div>
            <EditInformationLabelInput
              id="phone"
              {...register('phone')}
              defaultValue={user?.phone || '+380'}
              placeholder="+380"
              // type="number"
              type="text"
            />
            {errors.phone && (
              <ErrorMessage>{errors.phone.message}</ErrorMessage>
            )}
          </div>
          <Save type="submit">Save</Save>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};
export default EditInformationModal;
