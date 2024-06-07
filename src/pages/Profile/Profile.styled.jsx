import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-around;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 744px;
    padding: 0 20px;
    flex-direction: column;
    margin: auto;
  }
  @media screen and (max-width: 767px) {
    width: 375px;
    padding: 0 20px;
    flex-direction: column;
    margin: auto;
  }
`;
