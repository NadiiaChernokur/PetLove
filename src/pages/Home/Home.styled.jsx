import styled from '@emotion/styled';
export const HomeContainer = styled.div`
  min-width: 1282px;
  margin: auto;
  padding: 0 64px;
  position: absolute;
  z-index: 2;
  top: 0;
`;

export const HomeFirst = styled.div`
  border-radius: 60px;
  /* width: 1216px; */
  height: 384px;
  background: #f6b83d;
  display: flex;
  gap: 73px;
  padding: 32px 64px;
  align-items: flex-end;
`;
export const HomeSecond = styled.div`
  border-radius: 60px;
  /* width: 1216px; */
  height: 384px;
  background: #3df3f6;
`;
export const HomeTitel = styled.h3`
  font-weight: 700;
  font-size: 90px;
  line-height: 97%;
  letter-spacing: -0.03em;
  color: #fff;
`;
export const HomeText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 122%;
  letter-spacing: -0.02em;
  color: #fff;
  max-width: 255px;
  height: 88px;
`;
export const HomeCare = styled.span`
  color: rgba(255, 255, 255, 0.4);
`;
