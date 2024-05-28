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
  Save,
  UploadPhoto,
} from './EditInformationModal.styled';
const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invalid email address'
    )
    .required('Email is required'),
  avatar: Yup.string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      'Invalid URL for avatar'
    )
    .required('Avatar URL is required'),
  phone: Yup.string()
    .matches(/^\+38\d{10}$/, 'Invalid phone number')
    .required('Phone number is required'),
});

const EditInformationModal = ({ user, onClose, onUserUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      onClose();
    } catch (error) {
      alert('Error updating user: ' + error.message);
    }
  };
  return (
    <ModalContainer>
      <ModalContent>
        <Edit>Edit information</Edit>
        <form onSubmit={handleSubmit(onSubmit)}>
          <EditInformationModalImg>
            <img></img>
          </EditInformationModalImg>
          <EditInformationPhoto>
            <div>
              <EditInformationInput
                id="avatar"
                {...register('avatar')}
                defaultValue={user?.avatar}
              />
              {errors.avatar && (
                <ErrorMessage>{errors.avatar.message}</ErrorMessage>
              )}
            </div>
            <UploadPhoto>Upload photo</UploadPhoto>
          </EditInformationPhoto>
          <div>
            <EditInformationLabelInput
              id="name"
              {...register('name')}
              defaultValue={user?.name}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>
          <div>
            <EditInformationLabelInput
              id="email"
              {...register('email')}
              defaultValue={user?.email}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </div>

          <div>
            <EditInformationLabelInput
              id="phone"
              {...register('phone')}
              defaultValue={user?.phone}
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
