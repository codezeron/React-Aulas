import { Router } from 'react-router-dom';

import Header from './components/Header';
import Rotas from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <Header />
      <Rotas />
      <GlobalStyles />
    </Router>
  );
}

export default App;
