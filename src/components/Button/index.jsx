import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.theme.secondary};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;

  &:hover {
    opacity: 0.9;
  }
`;