import styled from 'styled-components';
import { ThemeToggler } from '../ThemeToggler';
import { Link } from 'react-router-dom';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color};
  
  &:hover {
    opacity: 0.8;
  }

  h1 {
    font-family: 'Press Start 2P', cursive; 
    font-size: 1.5rem;
    line-height: 1.5; /* Melhora o alinhamento vertical */
  }
`;

export const Header = () => {
  return (
    <Container>
      <LogoLink to="/">
        <h1>Pokédex</h1>
      </LogoLink>
      <ThemeToggler />
    </Container>
  );
};