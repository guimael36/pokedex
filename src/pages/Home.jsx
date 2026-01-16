import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/Button';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const FilterSelect = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: 'Poppins', sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const Card = styled.div`
  background: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.border};
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  transition: transform 0.2s;
  color: ${props => props.theme.color}; 
  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100px;
    height: 100px;
  }

  h3 {
    text-transform: capitalize;
    margin-top: 10px;
    font-weight: 700;
  }
`;

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then(response => response.json())
      .then(data => setTypes(data.results));
  }, []);

  useEffect(() => {
    async function fetchPokemons() {
      if (selectedType) {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
        const data = await response.json();
        const formatted = data.pokemon.map(p => p.pokemon); 
        setPokemons(formatted);
      } else {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
        const data = await response.json();
        setPokemons(prev => [...prev, ...data.results]);
      }
    }
    fetchPokemons();
  }, [offset, selectedType]);

  const handleLoadMore = () => {
    setOffset(prev => prev + 10);
  };

  const handleFilterChange = (e) => {
    setPokemons([]); 
    setOffset(0);
    setSelectedType(e.target.value);
  };

  const getPokemonId = (url) => {
    const splitUrl = url.split('/');
    return splitUrl[splitUrl.length - 2];
  };

  return (
    <Container>
      <FilterSelect onChange={handleFilterChange} value={selectedType}>
        <option value="">Todos os tipos</option>
        {types.map(type => (
          <option key={type.name} value={type.name}>{type.name}</option>
        ))}
      </FilterSelect>

      <Grid>
        {pokemons.map((pokemon, index) => {
          const id = getPokemonId(pokemon.url);
          return (
            <StyledLink to={`/pokemon/${id}`} key={`${id}-${index}`}>
              <Card>
                <img 
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
                  alt={pokemon.name} 
                />
                <h3>{pokemon.name}</h3>
              </Card>
            </StyledLink>
          );
        })}
      </Grid>

      {!selectedType && (
        <Button onClick={handleLoadMore}>Carregar mais</Button>
      )}
    </Container>
  );
};