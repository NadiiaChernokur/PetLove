import { useNavigate } from 'react-router-dom';
import {
  Container,
  ErrorButton,
  ErrorText,
  Title,
  TitleImg,
} from './ErrorPage.styled';

const ErrorPage = () => {
  const navigate = useNavigate();
  const click = () => {
    navigate('/home');
  };
  return (
    <Container>
      <Title>
        4<TitleImg></TitleImg>4
      </Title>
      <ErrorText>Ooops! This page not found :(</ErrorText>
      <ErrorButton onClick={click}>To home page</ErrorButton>
    </Container>
  );
};

export default ErrorPage;
