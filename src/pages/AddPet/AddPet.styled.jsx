import styled from 'styled-components';

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

export const AddPetContsiner = styled.div`
  margin: 32px;
  margin-top: 0;
  display: flex;
  gap: 32px;
  justify-content: space-between;
`;
export const AddPetImg = styled.img`
  border-radius: 60px;
  width: 592px;
  height: 654px;
`;
export const AddPetFormContainer = styled.div`
  border-radius: 60px;
  width: 592px;
  min-width: 592px;
  height: 654px;
  padding: 60px 80px;
  background: #fff;
`;
export const AddPetFormTitel = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #262626;
  margin-bottom: 40px;
`;

export const AddPetFormTitelSpan = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  color: rgba(43, 43, 42, 0.4);
`;
export const AddPetRadioContainer = styled.div`
  display: flex;
  gap: 8px;
`;
export const AddPetRadio = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;
export const AddPetRadioFemaleLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: none;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  background: ${(props) => props.bgColor || 'rgba(244, 63, 94, 0.1)'};
  text-align: center;
  line-height: 40px;

  &:after {
    content: '${(props) => props.text}';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    transition: background-color 0.3s;
  }

  ${AddPetRadio}:checked + & {
    background: green;
    mix-blend-mode: multiply;
  }
`;
export const AddPetRadioMaleLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: block;
  border: none;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  background: rgba(84, 173, 255, 0.1);
  text-align: center;

  ${AddPetRadio}:checked + & {
    background: green;
    mix-blend-mode: multiply;
  }
`;
export const Form = styled.form`
  width: 432px;
`;
export const AddPetRadioMultipleLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: block;
  border: none;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  background: #fff4df;
  text-align: center;

  ${AddPetRadio}:checked + & {
    background: green;
    mix-blend-mode: multiply;
  }
`;
export const AddPetPhoto = styled.img`
  border-radius: 100px;

  width: 86px;
  height: 86px;
  margin: auto;
  background: pink;
  margin-bottom: 12px;
`;
export const AddPetAddPhoto = styled.input`
  display: none;
`;

export const CustomButton = styled.button`
  background: #fff4df;
  color: white;
  border-radius: 30px;
  padding: 12px 16px;
  width: 146px;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #262626;
`;

export const FormInputFile = styled.input`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 12px 16px;
  width: 278px;
`;
export const FormInput = styled.input`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 16px;
  /* width: 432px; */
  width: 100%;
  margin-bottom: 18px;
`;

export const DownloadPhotoDiv = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
`;
export const BirthdayDiv = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
`;
export const AddPetButtonsDiv = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;
export const BackButton = styled.button`
  border-radius: 30px;
  border: none;
  padding: 14px;
  width: 170px;
  background: rgba(38, 38, 38, 0.05);
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #262626;
`;
export const SubmitButton = styled.button`
  border-radius: 30px;
  border: none;
  padding: 14px;
  width: 170px;
  height: 48px;
  background: #f6b83d;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #fff;
`;
export const AddPetSelect = styled.select`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 16px;
  width: 210px;
  /* width: 100%; */
  margin-bottom: 18px;
`;
