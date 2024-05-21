import {
  Birthday,
  BirthdaySpan,
  CatDescribe,
  CatDiv,
  CatImg,
  CatSection,
  Name,
  NameDiv,
  RegistrSection,
  RegistrationContainer,
} from './Registration.styled';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

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
        <h3>Registration</h3>
        <p>Thank you for your interest in our platform. </p>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <Field id="firstName" name="firstName" placeholder="Jane" />

            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <label></label>
            <Field id="password" name="password" placeholder="password" />
            <label></label>
            <Field
              id="confirmPassword"
              name="ConfirmPassword"
              placeholder="Confirm password"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </RegistrSection>
    </RegistrationContainer>
  );
};
export default Registration;
