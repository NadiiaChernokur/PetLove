import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* gap: 38px; */
  justify-content: space-around;
`;

export const Li = styled.li`
  width: 361px;
  height: 476px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 28px; */
  margin-bottom: 68px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 340px;
    /* height: 476px; */
  }
`;

export const NewsListImg = styled.img`
  width: 100%;
  height: 226px;
  border-radius: 15px;
  background-color: #fff4df;
  /* margin-bottom: 28px; */
`;

export const NewsTitel = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -0.03em;
  color: #262626;
  /* margin-bottom: 14px; */
`;
export const NewsText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.02em;
  color: #262626;
`;
export const NewsData = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`;
export const ReadMoreDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #f6b83d;
`;
