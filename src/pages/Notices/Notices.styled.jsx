import styled from '@emotion/styled';
export const NoticesContainer = styled.div`
  width: 1280px;
  padding: 64px 32px;
  margin: auto;
  @media screen and (max-width: 1280px) {
    width: 744px;
    padding: 0 20px;
  }
  @media screen and (max-width: 767px) {
    max-width: 415px;
    min-width: 415px;
    padding: 24px 20px;
    margin: auto;
  }
`;

export const NoticesTitel = styled.h3`
  font-weight: 700;
  font-size: 54px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #262626;
  margin-bottom: 40px;
  position: relative;
  right: -42px;
  @media screen and (max-width: 767px) {
    font-size: 28px;
    right: 0;
  }
`;
