import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 18, 19, 0.4);
  overflow: auto;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 50px;
  border-radius: 30px;
  width: 480px;
  height: 580px;
  margin: 10% auto;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 40px 20px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;
export const Edit = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #2b2b2a;
  margin-bottom: 20px;
`;
export const EditInformationModalImg = styled.div`
  border-radius: 100px;
  background: pink;
  width: 86px;
  height: 86px;
  margin: auto;
  margin-bottom: 12px;
`;
export const Save = styled.button`
  border-radius: 30px;
  padding: 16px;
  width: 380px;
  height: 52px;
  background: #f6b83d;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #fff;
  border: none;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const EditInformationLabelDiv = styled.div`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 16px 326px 16px 16px;
  width: 100%;
`;
export const EditInformationLabelInput = styled.input`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 16px;
  width: 100%;
  margin-bottom: 20px;
`;
export const EditInformationInput = styled.input`
  border: 1px solid #f6b83d;
  border-radius: 30px;
  padding: 12px 20px 12px 12px;
  width: 226px;
  height: 42px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const EditInformationPhoto = styled.div`
  display: flex;
  gap: 8px;
  width: 380px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const UploadPhoto = styled.button`
  border-radius: 30px;
  padding: 12px 16px;
  width: 146px;
  height: 42px;
  background: #fff4df;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #262626;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const ProfileFormModalDiv = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  background: #fff4df;
  border-radius: 100px;
  width: 110px;
  height: 110px;
  margin: auto;
  margin-bottom: 12px;
`;

export const ProfileFormModalImg = styled.img`
  border-radius: 100px;
  width: 110px;
  height: 110px;
  background: #fff4df;
  display: flex;
  margin-bottom: 8px;
`;
