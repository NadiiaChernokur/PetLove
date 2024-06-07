import styled from 'styled-components';

export const AttentionModalContainer = styled.div`
  background: #fff;
  border-radius: 30px;
  width: 466px;
  height: 434px;
  margin: 10% auto;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`;

export const AttentionModalTitel = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.03em;
  color: #f6b83d;
  margin-bottom: 20px;
`;

export const AttentionModalImg = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff4df;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;
export const AttentionModalText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #2b2b2a;
  margin-bottom: 28px;
`;
export const AttentionModalDuttonsDiv = styled.div`
  display: flex;
  gap: 8px;
`;
