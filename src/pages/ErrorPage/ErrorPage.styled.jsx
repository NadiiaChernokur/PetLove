import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 283px;
  border-radius: 60px;
  min-width: 1216px;
  /* height: 654px; */
  height: 100vh;
  margin: 0 32px;
  gap: 32px;
  background: #f6b83d;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    min-width: 770px;
  }
  @media screen and (max-width: 767px) {
    border-radius: 30px;
    min-width: 335px;
    height: 100vh;
    padding: 0 33px;
  }
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 300px;
  line-height: 100%;
  color: #fff;
  display: flex;
  @media screen and (max-width: 767px) {
    font-size: 120px;
  }
`;
export const TitleImg = styled.img`
  border-radius: 1000px;
  width: 299px;
  height: 300px;
  @media screen and (max-width: 767px) {
    width: 109px;
    height: 109px;
  }
`;

export const ErrorText = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.03em;
  color: #fff;
  white-space: nowrap;
`;
export const ErrorButton = styled.button`
  border-radius: 30px;
  border: none;
  padding: 14px 30px;
  width: 162px;
  height: 48px;
  background: #fff4df;
  white-space: nowrap;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #f6b83d;
`;
