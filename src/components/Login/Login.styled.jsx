import styled from 'styled-components';
import photo from '../../img/dogLog.png';
import { Field } from 'formik';
import photoT from '../../img/dogLogT.png';
import photoM from '../../img/dogLogM.png';

export const LoginContainer = styled.div`
  margin: 32px;
  margin-top: 0;
  display: flex;
  gap: 32px;
  justify-content: space-between;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin: auto;
  }
`;
export const DogSection = styled.div`
  border-radius: 60px;
  min-width: 592px;
  height: 654px;
  background-image: url(${photo});
  position: relative;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    background-image: url(${photoT});
    background: #f6b83d;
    margin: auto;
    width: 704px;
    height: 302px;
  }
  @media screen and (max-width: 767px) {
    background-image: url(${photoM});
    min-width: 335px;
    height: 280px;
    background-repeat: no-repeat;
    margin: auto;
  }
`;
export const DogSectionImg = styled.img`
  display: none;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: block;
    background-image: url(${photoT});
    position: relative;
    left: 290px;
    width: 364px;
    height: 302px;
  }
`;
export const DogDescribe = styled.div`
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
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    bottom: 32px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const DogImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: #fff4df;
  display: flex;
  align-items: center;
  padding: 14px;
`;
export const DogNameDiv = styled.div`
  display: flex;
  /* gap: 53px; */
  justify-content: space-between;
  width: 100%;
`;
export const DogDescribeP = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.8);
`;
export const DogName = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #f6b83d;
`;

export const DogDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
#
`;
export const DogBirthday = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`;
export const DogBirthdaySpan = styled.span`
  color: #262626;
`;
export const LogSection = styled.section`
  border-radius: 60px;
  width: 592px;
  background: #fff;
  padding: 114px 84px;
  box-sizing: border-box;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    margin: auto;
  }
  @media screen and (max-width: 767px) {
    margin: auto;
    width: 335px;
    padding: 60px 20px;
  }
`;

export const Log = styled.h3`
  font-weight: 700;
  font-size: 54px;
  line-height: 100%;
  letter-spacing: -0.04em;
  color: #262626;
  margin-bottom: 16px;
`;
export const LogButton = styled.button`
  margin-top: 58px;
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
// export const RelativDiv = styled.div`
//   position: relative;
//   width: 100%;
// `;
export const LogEye = styled.svg`
  position: absolute;
  height: 22px;
  width: 22px;
  top: 15px;
  right: 20px;
`;
