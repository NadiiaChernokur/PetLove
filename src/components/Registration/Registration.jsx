import {
  Birthday,
  BirthdaySpan,
  CatDescribe,
  CatDiv,
  CatImg,
  CatSection,
  ErrorText,
  FieldFormik,
  FormContainer,
  HaveAnAccount,
  HaveAnAccountSpan,
  Interest,
  Name,
  NameDiv,
  RegButton,
  Registr,
  RegistrSection,
  RegistrationContainer,
} from './Registration.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
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
  return (
    <RegistrationContainer>
      <CatSection>
        <CatDescribe>
          <CatImg>
            <svg></svg>
          </CatImg>
          <CatDiv>
            <NameDiv>
              <Name>Jack</Name>
              <Birthday>
                Birthday:
                <BirthdaySpan>18.10.2021</BirthdaySpan>
              </Birthday>
            </NameDiv>
            <p>
              Jack is a gray Persian cat with green eyes. He loves to be
              pampered and groomed, and enjoys playing with toys.
            </p>
          </CatDiv>
        </CatDescribe>
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
          onSubmit={async (values) => {
            console.log(values);
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
            <FieldFormik
              id="password"
              name="password"
              placeholder="Password"
              type="password"
            />
            <ErrorMessage name="password" component={ErrorText} />
            <FieldFormik
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
            />
            <ErrorMessage name="confirmPassword" component={ErrorText} />
            <RegButton type="submit">Registration</RegButton>
            <HaveAnAccount>
              Already have an account?
              <HaveAnAccountSpan>Login</HaveAnAccountSpan>
            </HaveAnAccount>
          </FormContainer>
        </Formik>
      </RegistrSection>
    </RegistrationContainer>
  );
};
export default Registration;
