import styled from 'styled-components';

export const HeaderContainer = styled.div`
  /* width: 100%; */
  padding: 32px 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const NavigationP = styled.p`
  padding: 15px 20px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 8px;
`;
export const ButtonLog = styled.button`
  all: unset;
  padding: 0 35px;
  height: 50px;
  border: none;
  border-radius: 30px;
  background: #f6b83d;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #fff;
`;
export const ButtonReg = styled.button`
  padding: 0 20px;
  height: 50px;
  background: #fff4df;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #f6b83d;
  border: none;
`;
