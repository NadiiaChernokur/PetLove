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
  position: relative;
  margin: 10% auto;
  padding: 40px 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 335px;
    /* padding: 0 28px; */
  }
`;
export const LearnMoreModalImg = styled.img`
  border-radius: 100px;
  position: relative;
  width: 150px;
  height: 150px;
  margin-bottom: 16px;
`;
export const LearnMoreDiv = styled.div`
  position: absolute;
  border-radius: 30px;
  padding: 8px 14px;
  width: 52px;
  height: 34px;
  background: #fff4df;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #f6b83d;
  left: 167px;
`;
export const LearnMoreSvg = styled.svg`
  position: absolute;
  top: 20px;
  right: 24px;
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
  margin-bottom: 20px;
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
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #262626;
`;
export const LearnMoreModalInfTitle = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
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
export const LearnMoreModalButton = styled.a`
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
  cursor: pointer;
  display: flex;
  justify-content: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;
