import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PokemonDetails } from './pages/PokemonDetails';
import { Header } from './components/Header';

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
      </HashRouter>
  );
};