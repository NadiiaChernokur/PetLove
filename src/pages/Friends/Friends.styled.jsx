import styled from '@emotion/styled';
export const FriendsContainer = styled.div`
  width: 1193px;
  padding: 0 20px;
  margin: 64px auto;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 744px;
    padding: 0 20px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    margin: auto;
    padding: 0;
  }
`;

export const FriendsTitel = styled.h3`
  font-weight: 700;
  font-size: 54px;
  line-height: 100%;
  letter-spacing: -0.03em;
  color: #262626;
  margin-bottom: 60px;
  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
`;
export const FriendsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const FriendsLi = styled.li`
  margin-bottom: 8px;
  background: #fff;
  border-radius: 15px;
  width: 371px;
  height: 196px;
  padding: 12px 20px;
  position: relative;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 342px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    margin: auto;
  }
`;
export const Time = styled.p`
  background: #fff4df;
  border-radius: 30px;
  padding: 8px;
  white-space: nowrap;
  position: absolute;
  right: 12px;
  color: #f6b83d;
`;
export const FriendInf = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    gap: 14px;
  }
`;
export const FriendImg = styled.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
`;
export const FriendsInfDiv = styled.div`
  width: 196px;
`;

export const FriendName = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -0.04em;
  color: #262626;
  margin-bottom: 20px;
`;

export const Information = styled.p`
  width: 236px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #262626;
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    overflow: inherit;
    text-overflow: inherit;
    white-space: inherit;
    height: auto;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const InformationSpan = styled.span`
  color: rgba(38, 38, 38, 0.5);
`;
