import { Field, Form } from 'formik';
import styled from 'styled-components';

export const NoticesFiltersContainer = styled.div`
  background: #fff4df;
  max-width: 1216px;
  min-width: 800px;
  height: 216px;
  padding: 40px;
  border-radius: 30px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    max-width: 744px;
    min-width: 744px;
    height: 280px;
    padding: 40px 20px;
    margin: auto;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 767px) {
    max-width: 375px;
    min-width: 375px;
    height: 378px;
    padding: 20px;
  }
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
  @media screen and (max-width: 767px) {
    gap: 12px;
  }
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
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const CheckDiv = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
export const BorderDiv = styled.hr`
  display: none;
  @media screen and (max-width: 1280px) {
    border: none;
    height: 1px;
    background-color: rgba(38, 38, 38, 0.1);
    margin: 20px 0;
    width: 704px;
    display: block;
  }
  @media screen and (max-width: 767px) {
    margin: 0;
  }
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
  @media screen and (max-width: 767px) {
    padding: 12px;
  }
`;
export const SearchButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
`;
export const CrossButton = styled.button`
  position: absolute;
  top: 15px;
  right: 41px;
  background: none;
  border: none;
`;
export const SearchFieldDiv = styled.div`
  position: relative;
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`;
export const GenderCategoryDiv = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (max-width: 767px) {
    /* display: flex;
    gap: 8px; */
    width: 100%;
  }
`;
export const LocationDiv = styled.div`
  position: relative;
  width: 227px;
  @media screen and (max-width: 767px) {
    display: flex;
    gap: 8px;
    width: 295px;
  }
`;
