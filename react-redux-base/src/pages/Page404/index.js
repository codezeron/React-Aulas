import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles';
export default function Page404() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]); // Redirect to home page on 404 page
  return (
    <Container>
      <h1>Página não encontrada 404</h1>
    </Container>
  );
}
