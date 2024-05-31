import {
  DogBirthday,
  DogBirthdaySpan,
  DogDescribe,
  DogDescribeP,
  DogDiv,
  DogImg,
  DogName,
  DogNameDiv,
  DogSection,
  Log,
  LogButton,
  LogEye,
  LogSection,
  LoginContainer,
} from './Login.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  ErrorText,
  FieldFormik,
  FormContainer,
  HaveAnAccount,
  HaveAnAccountSpan,
  Interest,
} from '../Registration/Registration.styled';
import sprite from '/src/img/sprite.svg';
import photo from '../../img/dog.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const schema = yup.object().shape({
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
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = () => {
    navigate('/register');
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const fetchLogin = async (data) => {
    const results = await dispatch(logIn(data));
    console.log(results);
    if (
      results.error.message === 'Rejected' &&
      results.payload.includes('401')
    ) {
      toast('You are not authorized');
    } else {
      console.log(results.payload);
    }
  };
  return (
    <LoginContainer>
      <ToastContainer toastStyle={{ background: '#f30e0e', color: 'white' }} />
      <DogSection>
        <DogDescribe>
          <DogImg>
            <img src={photo}></img>
          </DogImg>
          <DogDiv>
            <DogNameDiv>
              <DogName>Rich</DogName>
              <DogBirthday>
                Birthday:
                <DogBirthdaySpan>21.09.2020</DogBirthdaySpan>
              </DogBirthday>
            </DogNameDiv>
            <DogDescribeP>
              Rich would be the perfect addition to an active family that loves
              to play and go on walks. I bet he would love having a doggy
              playmate too!
            </DogDescribeP>
          </DogDiv>
        </DogDescribe>
      </DogSection>
      <LogSection>
        <Log>Log in</Log>
        <Interest>
          Welcome! Please enter your credentials to login to the platform:
        </Interest>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            fetchLogin(values);
            console.log(values);
          }}
          validationSchema={schema}
        >
          {({ values, handleChange }) => (
            <FormContainer>
              <FieldFormik
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                value={values.email}
              />
              <ErrorMessage name="email" component={ErrorText} />

              <FieldFormik
                id="password"
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
              />
              {showPassword ? (
                <LogEye width="32" height="32" onClick={toggleShowPassword}>
                  <use href={`${sprite}#eye`}></use>
                </LogEye>
              ) : (
                <LogEye width="32" height="32" onClick={toggleShowPassword}>
                  <use href={`${sprite}#eye-off`}></use>
                </LogEye>
              )}

              <ErrorMessage name="password" component={ErrorText} />

              <LogButton type="submit">Log In</LogButton>
              <HaveAnAccount>
                Don’t have an account?
                <HaveAnAccountSpan onClick={handleNavigate}>
                  Register
                </HaveAnAccountSpan>
              </HaveAnAccount>
            </FormContainer>
          )}
        </Formik>
      </LogSection>
    </LoginContainer>
  );
};
export default Login;
