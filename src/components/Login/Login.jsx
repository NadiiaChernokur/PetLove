import {
  DogBirthday,
  DogBirthdaySpan,
  DogDescribe,
  DogDiv,
  DogImg,
  DogName,
  DogNameDiv,
  DogSection,
  Log,
  LogButton,
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
  return (
    <LoginContainer>
      <DogSection>
        <DogDescribe>
          <DogImg>
            <svg></svg>
          </DogImg>
          <DogDiv>
            <DogNameDiv>
              <DogName>Rich</DogName>
              <DogBirthday>
                Birthday:
                <DogBirthdaySpan>21.09.2020</DogBirthdaySpan>
              </DogBirthday>
            </DogNameDiv>
            <p>
              Rich would be the perfect addition to an active family that loves
              to play and go on walks. I bet he would love having a doggy
              playmate too!
            </p>
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
          onSubmit={async (values) => {
            console.log(values);
          }}
          validationSchema={schema}
        >
          <FormContainer>
            <FieldFormik
              id="email"
              name="email"
              placeholder="Email"
              type="email"
            />
            <ErrorMessage name="email" component={ErrorText} />
            <FieldFormik
              id="password"
              name="password"
              placeholder="Password"
              type="password"
            />
            <ErrorMessage name="password" component={ErrorText} />

            <LogButton type="submit">Log In</LogButton>
            <HaveAnAccount>
              Don’t have an account?
              <HaveAnAccountSpan>Register</HaveAnAccountSpan>
            </HaveAnAccount>
          </FormContainer>
        </Formik>
      </LogSection>
    </LoginContainer>
  );
};
export default Login;
