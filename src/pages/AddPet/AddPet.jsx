import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  AddPetAddPhoto,
  AddPetButtonsDiv,
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
  AddPetSelect,
  BackButton,
  BirthdayDiv,
  CustomButton,
  DownloadPhotoDiv,
  ErrorMessage,
  Form,
  FormInput,
  FormInputFile,
  SubmitButton,
} from './AddPet.styled';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPet, getSpecies } from '../../redux/operation';
import Select from 'react-select';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  name: yup.string().required('Name is required'),
  imgUrl: yup
    .string()
    .matches(
      /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp))|^(blob:)/,
      'Invalid URL'
    )
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
  const [option, setOption] = useState([]);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const fetchSpecies = async () => {
      const res = await dispatch(getSpecies());
      console.log(res);
      setOption(res.payload);
    };
    fetchSpecies();
  }, [dispatch]);

  const history = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = dispatch(addPet(data));
      console.log(res);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const handleBack = () => {
    history.push('/profile');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(URL.createObjectURL(file));

    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setSelectedFile(blobUrl);
      setValue('imgUrl', blobUrl);
    }
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
          <AddPetPhoto src={selectedFile} alt={'title'}></AddPetPhoto>
          <DownloadPhotoDiv>
            <FormInputFile value={selectedFile} />
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
            <FormInput {...register('title')} placeholder="Title" />
            {errors.title && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </div>
          <div>
            <label></label>
            <FormInput {...register('name')} placeholder="Pet’s Name" />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>
          <BirthdayDiv>
            <div>
              <label></label>
              <FormInput {...register('birthday')} placeholder="0000.00.00" />
              {errors.birthday && (
                <ErrorMessage>{errors.birthday.message}</ErrorMessage>
              )}
            </div>
            {/* <div>
              <label></label>
              <FormInput {...register('species')} placeholder="Type of pet" />
              {errors.species && (
                <ErrorMessage>{errors.species.message}</ErrorMessage>
              )}
            </div> */}

            <AddPetSelect
              name="species"
              {...register('species')}
              onChange={(e) => setValue('species', e.target.value)}
            >
              <option value="">Type of pet</option>
              {option?.map((petType, index) => (
                <option key={index} value={petType}>
                  {petType}
                </option>
              ))}
            </AddPetSelect>
            {errors.species && (
              <ErrorMessage>{errors.species.message}</ErrorMessage>
            )}
          </BirthdayDiv>
          <AddPetButtonsDiv>
            <BackButton type="button" onClick={handleBack}>
              Back
            </BackButton>
            <SubmitButton type="submit">Submit</SubmitButton>
          </AddPetButtonsDiv>
        </Form>
      </AddPetFormContainer>
    </AddPetContsiner>
  );
};
export default AddPet;
