import styled from 'styled-components';
import { Form, Field } from 'formik';
export const RegistrationContainer = styled.div`
  margin: 32px;
  margin-top: 0;
  display: flex;
  gap: 32px;
  justify-content: space-between;
  /* justify-content: center; */
`;
export const CatSection = styled.div`
  border-radius: 60px;
  width: 592px;
  height: 654px;
  background-color: blueviolet;
  position: relative;
  /* box-sizing: border-box; */
`;
export const CatDescribe = styled.div`
  border-radius: 20px;
  width: 294px;
  background: #fff;
  padding: 16px;
  display: flex;
  gap: 8px;
  box-sizing: none;
  position: absolute;
  bottom: 97px;
  left: 61px;
`;
export const CatImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: #fff4df;
`;
export const NameDiv = styled.div`
  display: flex;
  /* gap: 53px; */
  justify-content: space-between;
  width: 100%;
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #f6b83d;
`;

export const CatDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* width: 194px; */
`;
export const Birthday = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`;
export const BirthdaySpan = styled.span`
  color: #262626;
`;
export const RegistrSection = styled.section`
  border-radius: 60px;
  width: 592px;
  background: #fff;
  padding: 77px 84px;
  box-sizing: border-box;
`;

export const Registr = styled.h3`
  font-weight: 700;
  font-size: 54px;
  line-height: 100%;
  letter-spacing: -0.04em;
  color: #262626;
  margin-bottom: 16px;
`;

export const Interest = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 122%;
  letter-spacing: -0.02em;
  color: #262626;
  margin-bottom: 32px;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FieldFormik = styled(Field)`
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  padding: 16px;
`;
export const RegButton = styled.button`
  background: #f6b83d;
  border-radius: 30px;
  border: none;
  padding: 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #fff;
`;

export const HaveAnAccount = styled.p`
  display: inline-block;
  margin: auto;
  text-align: center;
`;
export const HaveAnAccountSpan = styled.span`
  font-weight: 700;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #f6b83d;
`;
export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
`;
export const SuccessText = styled.div`
  color: #08aa83;
  font-size: 12px;
`;
