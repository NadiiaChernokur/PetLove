import { SpinnerDiamond, SpinnerInfinity } from 'spinners-react';
import { LoaderContainer, LoaderContainerInput } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <SpinnerDiamond style={{ width: '100' }} />
    </LoaderContainer>
  );
};
export const LoaderInput = ({ width }) => {
  return (
    <LoaderContainerInput $prop={width}>
      <SpinnerInfinity />
    </LoaderContainerInput>
  );
};
