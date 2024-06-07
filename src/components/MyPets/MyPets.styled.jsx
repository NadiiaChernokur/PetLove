import styled from 'styled-components';
export const MyPetsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 20px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const MyPetsLi = styled.li`
  border: 1px solid rgba(38, 38, 38, 0.1);
  border-radius: 20px;
  width: 440px;
  height: 130px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 305px;
    height: 149px;
    position: relative;
  }
  @media screen and (max-width: 767px) {
    width: 295px;
    height: 132px;
    padding: 16px;
  }
`;
export const MyPetsImg = styled.img`
  border-radius: 100px;
  width: 90px;
  height: 90px;
  background: pink;
  margin-right: 25px;
  @media screen and (max-width: 1280px) {
    width: 75px;
    height: 75px;
    margin-right: 14px;
  }
`;
export const MyPetsDeliteButton = styled.button`
  border-radius: 30px;
  padding: 10px;
  width: 38px;
  height: 38px;
  background: #fff4df;
  border: none;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    position: absolute;
    top: 13px;
    right: 15px;
  }
`;

export const MyPetsTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  color: #2b2b2a;
  margin-bottom: 12px;
`;
export const MyPetsInformation = styled.div`
  display: flex;
  gap: 27px;
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: #262626;
  @media screen and (max-width: 1280px) {
    gap: 10px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 767px) {
    width: 153px;
  }
`;
export const MyPetsInformationP = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`;
export const MyPetsBlock = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 153px;
    align-items: flex-start;
  }
`;
