import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 109px 283px;
  border-radius: 60px;
  min-width: 1216px;
  height: 654px;
  margin: 0 32px;
  gap: 32px;
  background: #f6b83d;
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 300px;
  line-height: 100%;
  color: #fff;
  display: flex;
`;
export const TitleImg = styled.img`
  border-radius: 1000px;
  width: 299px;
  height: 300px;
`;

export const ErrorText = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.03em;
  color: #fff;
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
