import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 18, 19, 0.4);
  overflow: auto;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 30px;
  width: 473px;
  height: 476px;
  /* top: 50%;
  left: 50%; */
  margin: 10% auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LearnMoreModalImg = styled.img`
  border-radius: 100px;

  width: 150px;
  height: 150px;
  margin-bottom: 16px;
`;

export const LearnMoreModalName = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #2b2b2a;
  margin-bottom: 10px;
`;

export const LearnMoreModalStars = styled.div`
  display: flex;
  gap: 4px;
`;
export const LearnMoreModalInformation = styled.div`
  display: flex;
  gap: 27px;
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #262626;
  margin-bottom: 18px;
`;
export const LearnMoreModalInf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LearnMoreModalText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #2b2b2a;
  margin-bottom: 40px;
`;
export const LearnMoreModalButtons = styled.div`
  display: flex;
  gap: 10px;
`;
export const LearnMoreModalButton = styled.button`
  border-radius: 30px;
  padding: 14px;
  width: 160px;
  height: 48px;
  border: none;
  background: #fff4df;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #f6b83d;
`;

export const LearnMoreModalAdd = styled.button`
  border-radius: 30px;
  padding: 14px;
  width: 160px;
  height: 48px;
  border: none;
  background: #f6b83d;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #fff;
`;
