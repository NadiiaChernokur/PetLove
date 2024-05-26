import { Field, Form } from 'formik';
import styled from 'styled-components';

export const NoticesFiltersContainer = styled.div`
  background: pink;
  max-width: 1216px;
  min-width: 800px;
  height: 216px;
  padding: 40px;
  border-radius: 30px;
  margin-bottom: 40px;
`;
export const ResetButton = styled.button`
  padding: 8px 16px;
  margin-top: 16px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const NoticesForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
export const NoticesField = styled(Field)`
  border-radius: 30px;
  padding: 14px;
  width: 190px;
  height: 48px;
  background: #fff;
  border: none;
`;
