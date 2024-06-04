import {
  Birthday,
  BirthdaySpan,
  CatDescribe,
  CatDiv,
  CatImg,
  CatSection,
  CatSectionImg,
  Div,
  ErrorText,
  FieldFormik,
  FormContainer,
  HaveAnAccount,
  HaveAnAccountSpan,
  Interest,
  Name,
  NameDiv,
  RegButton,
  RegEye,
  Registr,
  RegistrSection,
  RegistrationContainer,
} from './Registration.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { DogDescribeP } from '../Login/Login.styled';
import photo from '../../img/cat.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import sprite from '/src/img/sprite.svg';
import photoT from '../../img/catRagT.png';
import { registration } from '../../redux/operation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Enter a valid Email'
    ),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConf, setShowPasswordConf] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toLogin = () => {
    navigate('/login');
  };
  const fetchRegistration = async (data) => {
    const results = await dispatch(registration(data));
    if (results.meta.requestStatus === 'fulfilled') {
      localStorage.setItem('petLoveUserData', JSON.stringify(results.payload));
      navigate('/login');
    } else {
      if (results.payload.includes('409')) {
        toast('This email is already registered. log in');
      }
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPasswordConf = () => {
    setShowPasswordConf(!showPasswordConf);
  };
  return (
    <RegistrationContainer>
      <ToastContainer toastStyle={{ background: '#f30e0e', color: 'white' }} />
      <CatSection>
        <CatDescribe>
          <CatImg>
            <img src={photo} alt="Cat"></img>
          </CatImg>
          <CatDiv>
            <NameDiv>
              <Name>Jack</Name>
              <Birthday>
                Birthday:
                <BirthdaySpan>18.10.2021</BirthdaySpan>
              </Birthday>
            </NameDiv>
            <DogDescribeP>
              Jack is a gray Persian cat with green eyes. He loves to be
              pampered and groomed, and enjoys playing with toys.
            </DogDescribeP>
          </CatDiv>
        </CatDescribe>
        <CatSectionImg src={photoT}></CatSectionImg>
      </CatSection>
      <RegistrSection>
        <Registr>Registration</Registr>
        <Interest>Thank you for your interest in our platform. </Interest>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values) => {
            const { confirmPassword, ...rest } = values;
            fetchRegistration(rest);
            console.log(rest);
          }}
          validationSchema={schema}
        >
          <FormContainer>
            <FieldFormik id="name" name="name" placeholder="Name" />
            <ErrorMessage name="name" component={ErrorText} />
            <FieldFormik
              id="email"
              name="email"
              placeholder="Email"
              type="email"
            />
            <ErrorMessage name="email" component={ErrorText} />
            <Div>
              <FieldFormik
                id="password"
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
              />
              {showPassword ? (
                <RegEye width="22" height="22" onClick={toggleShowPassword}>
                  <use href={`${sprite}#eye`}></use>
                </RegEye>
              ) : (
                <RegEye width="22" height="22" onClick={toggleShowPassword}>
                  <use href={`${sprite}#eye-off`}></use>
                </RegEye>
              )}
              <ErrorMessage name="password" component={ErrorText} />
            </Div>
            <Div>
              <FieldFormik
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                type={showPasswordConf ? 'text' : 'password'}
              />
              {showPasswordConf ? (
                <RegEye width="22" height="22" onClick={toggleShowPasswordConf}>
                  <use href={`${sprite}#eye`}></use>
                </RegEye>
              ) : (
                <RegEye width="22" height="22" onClick={toggleShowPasswordConf}>
                  <use href={`${sprite}#eye-off`}></use>
                </RegEye>
              )}
              <ErrorMessage name="confirmPassword" component={ErrorText} />
            </Div>
            <RegButton type="submit">Registration</RegButton>
            <HaveAnAccount>
              Already have an account?
              <HaveAnAccountSpan onClick={toLogin}>Login</HaveAnAccountSpan>
            </HaveAnAccount>
          </FormContainer>
        </Formik>
      </RegistrSection>
    </RegistrationContainer>
  );
};
export default Registration;
