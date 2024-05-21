import styled from 'styled-components';

export const RegistrationContainer = styled.div`
  margin: 32px;
  margin-top: 0;
  display: flex;
  gap: 32px;
  justify-content: space-between;
`;
export const CatSection = styled.section`
  border-radius: 60px;
  width: 592px;
  height: 654px;
  background-color: blueviolet;
  position: relative;
  box-sizing: border-box;
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
`;
