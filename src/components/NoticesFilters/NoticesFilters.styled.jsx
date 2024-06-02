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
  /* -webkit-appearance: none;
  -moz-appearance: none; */
  appearance: none;
`;
export const CheckDiv = styled.div`
  display: flex;
  gap: 8px;
`;
export const CheckboxInput = styled.input`
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
export const CheckboxLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  gap: 8px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 30px;
  padding: 14px;
  background: #fff;
  text-align: center;

  ${CheckboxInput}:checked + & {
    background-color: green;
    mix-blend-mode: multiply;
  }
`;
export const SearchButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
`;
