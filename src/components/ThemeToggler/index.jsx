import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.color};
  color: ${props => props.theme.color};
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
`;

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </Button>
  );
};