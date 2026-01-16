import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 30px;
  background: ${props => props.theme.cardBg};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.color};
`;

const BackLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color};
  font-weight: bold;
  font-size: 1rem;
  align-self: flex-start;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
`;

const Title = styled.h1`
  text-transform: capitalize;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-top: 30px;
  text-align: left;
  width: 100%;
  
  h3 {
    border-bottom: 1px solid ${props => props.theme.border};
    padding-bottom: 10px;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 10px;
    line-height: 1.5;
  }
`;

const Tag = styled.span`
  background: ${props => props.theme.secondary};
  color: #fff;
  padding: 8px 12px;
  border-radius: 20px;
  margin: 0 5px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
`;

export const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [abilitiesDescription, setAbilitiesDescription] = useState([]);

  useEffect(() => {
    async function getPokemonData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);

      const abilitiesPromises = data.abilities.map(async (item) => {
        const res = await fetch(item.ability.url);
        const json = await res.json();
        const entry = json.effect_entries.find(entry => entry.language.name === 'en');
        return {
          name: item.ability.name,
          description: entry ? entry.short_effect : 'Sem descrição disponível.'
        };
      });

      const abilitiesResults = await Promise.all(abilitiesPromises);
      setAbilitiesDescription(abilitiesResults);
    }

    getPokemonData();
  }, [id]);

  if (!pokemon) return <p>Carregando...</p>;

  return (
    <Container>
      <BackLink to="/">
        &larr; Voltar
      </BackLink>
      
      <PokemonImage 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
      />
      
      <Title>{pokemon.name}</Title>
      
      <div>
        {pokemon.types.map(t => (
          <Tag key={t.type.name}>{t.type.name}</Tag>
        ))}
      </div>

      <Section>
        <h3>Movimentos</h3>
        <ul>
          {pokemon.moves.slice(0, 10).map(m => (
            <li key={m.move.name}>- {m.move.name}</li>
          ))}
        </ul>
      </Section>

      <Section>
        <h3>Habilidades</h3>
        <ul>
          {abilitiesDescription.map(ability => (
            <li key={ability.name}>
              <strong style={{ textTransform: 'capitalize' }}>{ability.name}:</strong> {ability.description}
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  );
};