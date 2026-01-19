import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PokemonDetails } from './pages/PokemonDetails';
import { Header } from './components/Header';

export const AppRoutes = () => {
  return (
    <BrowserRouter basename='/pokedex'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};