import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  AddPetAddPhoto,
  AddPetContsiner,
  AddPetFormContainer,
  AddPetFormTitel,
  AddPetFormTitelSpan,
  AddPetImg,
  AddPetPhoto,
  AddPetRadio,
  AddPetRadioContainer,
  AddPetRadioFemaleLabel,
  AddPetRadioMaleLabel,
  AddPetRadioMultipleLabel,
  BirthdayDiv,
  CustomButton,
  DownloadPhotoDiv,
  ErrorMessage,
  Form,
  FormInput,
  FormInputFile,
} from './AddPet.styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  name: yup.string().required('Name is required'),
  imgUrl: yup
    .string()
    .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, 'Invalid URL')
    .required('Image URL is required'),
  species: yup.string().required('Species is required'),
  birthday: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)')
    .required('Birthday is required'),
  sex: yup.string().required('Sex is required'),
});

const AddPet = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const handleBack = () => {
    history.push('/profile');
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };
  return (
    <AddPetContsiner>
      <div width={592}>
        <AddPetImg></AddPetImg>
      </div>
      <AddPetFormContainer>
        <AddPetFormTitel>
          Add my pet /
          <AddPetFormTitelSpan>Personal details</AddPetFormTitelSpan>
        </AddPetFormTitel>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <AddPetRadioContainer>
              <AddPetRadio
                type="radio"
                id="female"
                value="female"
                {...register('sex')}
              />
              <AddPetRadioFemaleLabel
                htmlFor="female"
                bgColor="rgba(244, 63, 94, 0.1)"
                text="F"
              />

              <AddPetRadio
                type="radio"
                id="male"
                value="male"
                {...register('sex')}
              />
              <AddPetRadioFemaleLabel
                htmlFor="male"
                bgColor="rgba(84, 173, 255, 0.1)"
                text="M"
              />

              <AddPetRadio
                type="radio"
                id="multiple"
                value="multiple"
                {...register('sex')}
              />
              <AddPetRadioFemaleLabel
                htmlFor="multiple"
                bgColor="#fff4df"
                text="X"
              />
            </AddPetRadioContainer>
            {errors.sex && <ErrorMessage>{errors.sex.message}</ErrorMessage>}
          </div>
          <AddPetPhoto></AddPetPhoto>
          <DownloadPhotoDiv>
            <FormInputFile />
            <AddPetAddPhoto
              {...register('imgUrl')}
              id="fileInput"
              type="file"
              accept="image/png, image/jpeg, image/gif, image/bmp, image/webp"
              {...register('imgUrl')}
              onChange={handleFileChange}
            />
            {errors.imgUrl && (
              <ErrorMessage>{errors.imgUrl.message}</ErrorMessage>
            )}
            <CustomButton type="button" onClick={handleButtonClick}>
              Upload Photo
            </CustomButton>
          </DownloadPhotoDiv>
          <div>
            <label></label>
            <FormInput {...register('title')} />
            {errors.title && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </div>
          <div>
            <label></label>
            <FormInput {...register('name')} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>
          <BirthdayDiv>
            <div>
              <label></label>
              <FormInput {...register('birthday')} />
              {errors.birthday && (
                <ErrorMessage>{errors.birthday.message}</ErrorMessage>
              )}
            </div>
            <div>
              <label></label>
              <FormInput {...register('species')} />
              {errors.species && (
                <ErrorMessage>{errors.species.message}</ErrorMessage>
              )}
            </div>
          </BirthdayDiv>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleBack}>
            Back
          </button>
        </Form>
      </AddPetFormContainer>
    </AddPetContsiner>
  );
};
export default AddPet;
