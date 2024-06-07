import styled from 'styled-components';
export const LeavingModalContainer = styled.div`
  background: #fff;
  border-radius: 30px;
  width: 448px;
  height: 364px;
  margin: 10% auto;
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 0 28px;
    justify-content: center;
  }
`;

export const LeavingModalTitel = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 117%;
  letter-spacing: -0.03em;
  color: #262626;
  margin-bottom: 28px;
`;
export const LeavingModalCancel = styled.button`
  background: rgba(38, 38, 38, 0.05);
  border-radius: 30px;
  padding: 14px 44px;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  color: #262626;
  border: none;
`;
export const LeavingModalButtons = styled.div`
  display: flex;
  gap: 8px;
`;
