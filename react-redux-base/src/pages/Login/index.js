import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <small>Essa é a página de login</small>
      <Paragrafo>Essa é a página de login</Paragrafo>
      <button>Enviar</button>
    </Container>
  );
}
