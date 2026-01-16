# Pokédex - Desafio Frontend DevQuest

Este projeto é uma Single Page Application (SPA) desenvolvida em React.js que consome a PokeAPI para listar Pokémons, ver seus detalhes e filtrar por tipos.

## 🔨 Funcionalidades

- **Home:** Listagem inicial de 10 Pokémons com paginação ("Carregar mais").
- **Detalhes:** Página interna com foto, nome, tipos, movimentos e descrição das habilidades do Pokémon.
- **Temas:** Botão para alternar entre Dark Mode e Light Mode.
- **Filtro (Bônus):** Select para filtrar Pokémons por tipo elemental.

## 🛠 Ferramentas Utilizadas

- **React.js (Vite):** Escolhido pela rapidez de configuração e performance em desenvolvimento.
- **Styled-components:** Para estilização CSS-in-JS, facilitando a manutenção e a criação de temas dinâmicos.
- **Context API:** Utilizada para gerenciar o estado global do tema (Claro/Escuro) sem prop drilling.
- **React-router-dom:** Para gerenciar a navegação entre a Home e a página de Detalhes sem recarregar a página.
- **Fetch API:** Para consumo de dados, mantendo a simplicidade sem bibliotecas externas como Axios.

## 💡 Decisões de Projeto

- **Estrutura:** Optei por separar `pages`, `components` e `contexts` para manter o código organizado e escalável.
- **Filtragem:** Ao utilizar o filtro por tipo, o botão de paginação é ocultado, pois a API retorna estruturas diferentes para busca por tipo, simplificando a lógica para este desafio.
- **Habilidades:** É feita uma segunda chamada à API dentro da página de detalhes para buscar a descrição textual das habilidades, filtrando apenas pela linguagem em inglês.

## 🚀 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/guimael36/pokedex.git
   ```

2. Entre na pasta:
   ```bash
   cd pokedex
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Rode o projeto:
   ```bash
   npm run dev
   ```

5. Acesse no navegador (geralmente em http://localhost:5173).