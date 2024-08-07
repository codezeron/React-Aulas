import Login from './pages/Login';
import { Title } from './pages/Login/styled';
import GlobalStyles, { Container } from './styles/GlobalStyles';

function App() {
  return (
    <Container>
      <Title>
        <Login />
        <GlobalStyles />
      </Title>
    </Container>
  );
}

export default App;
