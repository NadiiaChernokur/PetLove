import styled from '@emotion/styled';
import photo from '/src/img/dogGirl.png';
import photoT from '/src/img/girlDogTab.png';
import photoM from '/src/img/girlDogM.png';
export const HomeContainer = styled.div`
  min-width: 1282px;
  margin: auto;
  padding: 0 64px;
  position: absolute;
  z-index: 2;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    min-width: 744px;
    max-width: 744px;
    padding: 0 20px;
  }
  @media screen and (max-width: 767px) {
    border-radius: 30px;
    min-width: 335px;
    max-width: 335px;
    padding: 0;
  }
`;

export const HomeFirst = styled.div`
  border-radius: 60px;

  height: 384px;
  background: #f6b83d;
  display: flex;
  gap: 73px;
  padding: 32px 64px;
  align-items: flex-end;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    min-height: 384px;
    flex-direction: column;
    padding: 0 32px;
    padding-top: 173px;
    height: 496px;
    width: 704px;
    gap: 32px;
  }
  @media screen and (max-width: 767px) {
    border-radius: 30px;
    width: 335px;
    height: 390px;
    padding: 118px 20px 50px 20px;
    flex-direction: column;
    gap: 24px;
  }
`;
export const HomeSecond = styled.div`
  border-radius: 60px;
  background-image: url(${photo});
  height: 384px;
  width: 1216px;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
    height: 496px;
    background-image: url(${photoT});
  }
  @media screen and (max-width: 767px) {
    background-image: url(${photoM});
    border-radius: 30px;
    width: 335px;
    margin: auto;
  }
`;
export const HomeTitel = styled.h3`
  font-weight: 700;
  font-size: 90px;
  line-height: 97%;
  letter-spacing: -0.03em;
  color: #fff;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    font-weight: 700;
    font-size: 80px;
    line-height: 96%;
  }
  @media screen and (max-width: 767px) {
    font-size: 50px;
  }
`;
export const HomeText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 122%;
  letter-spacing: -0.02em;
  color: #fff;
  max-width: 255px;
  height: 88px;
  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;
export const HomeCare = styled.span`
  color: rgba(255, 255, 255, 0.4);
`;
