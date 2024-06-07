import styled from '@emotion/styled';
export const NewsContainer = styled.div`
  width: 1282px;
  padding: 62px;
  margin: auto;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 744px;
    padding: 0 20px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 0;
  }
`;
export const NewsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 24px;
  }
`;
export const Titel = styled.h3`
  font-weight: 700;
  font-size: 54px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #262626;
  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
`;
export const Form = styled.form`
  position: relative;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const Input = styled.input`
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  padding: 14px;
  width: 230px;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const NewsButtonsDiv = styled.div`
  position: absolute;
  top: 15px;
  right: 11px;
`;
export const NewsButton = styled.button`
  background: none;
  border: none;
`;
