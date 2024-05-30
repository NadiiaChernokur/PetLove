import styled from 'styled-components';

export const ProfileFormContainer = styled.div`
  border-radius: 60px;
  width: 520px;

  background: #fff;
  padding: 40px;
`;

export const ProfileFormFirstDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;
export const ProfileFormUser = styled.div`
  border-radius: 30px;
  padding: 10px 14px;
  width: 80px;
  height: 38px;
  background: #f6b83d;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileFormImg = styled.div`
  border-radius: 100px;
  padding: 10px;
  width: 110px;
  height: 110px;
  background: #fff4df;
  display: flex;
  margin-bottom: 8px;
`;

export const ProfileFormPhotoInput = styled.input`
  display: none;
`;

export const UploadPhotoButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #262626;
  background: none;
  border: none;
`;

export const UploadPhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UploadUserButton = styled.button`
  border-radius: 30px;
  border: none;
  padding: 10px;
  width: 38px;
  height: 38px;
  background: #fff4df;
`;
export const MyInformation = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #2b2b2a;
  margin-bottom: 20px;
`;
export const FormInput = styled.input`
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  padding: 16px 382px 16px 16px;
  width: 440px;
  height: 52px;
  margin-bottom: 14px;
`;

export const MyPetsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const MyPets = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #2b2b2a;
`;
export const AddPetButton = styled.button`
  border-radius: 30px;
  padding: 10px 20px;
  width: 118px;
  height: 40px;
  background: #f6b83d;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const AddPetButtonSpan = styled.span`
  font-weight: 20;
  font-size: 25px;
`;
export const LogoutButton = styled.button`
  border-radius: 30px;
  border: none;
  padding: 15px 35px;
  width: 136px;
  height: 50px;
  background: #fff4df;
  white-space: nowrap;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #f6b83d;
  margin-top: 80px;
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`;
