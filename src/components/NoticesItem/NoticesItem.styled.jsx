import styled from 'styled-components';

export const NoticesItemContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;
export const NoticesItemList = styled.li`
  margin-bottom: 8px;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
`;
export const NoticesItemImg = styled.div`
  border-radius: 16px;
  width: 315px;
  height: 178px;
  background-color: blue;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
`;
export const NoticesImg = styled.img`
  width: 315px;
  height: 277px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const KindOfAnimal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #2b2b2a;
  margin-bottom: 8px;
`;
export const KindOfAnimalStar = styled.div`
  display: flex;
`;
export const AnimalInformation = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #262626;
  margin-bottom: 16px;
`;
export const Information = styled.p`
  text-transform: capitalize;
`;

export const AnimalInformationHeader = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`;
export const AnimalInformationAbout = styled.p`
  display: flex;
  gap: 20px;
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #262626;
  margin-bottom: 50px;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LearnMore = styled.button`
  border-radius: 30px;
  padding: 14px 89px;
  width: 257px;
  height: 48px;
  background: #f6b83d;
  border: none;
  white-space: nowrap;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #fff;
`;
export const LikeButton = styled.button`
  border-radius: 30px;
  padding: 15px;
  width: 48px;
  height: 48px;
  background: #fff4df;
  border: none;
`;
