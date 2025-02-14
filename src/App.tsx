import CharactersPage from './components/Characters-page';
import './App.css';
import CharacterPage from './components/Character-page';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CharactersPage />} />
      <Route path='/:id' element={<CharacterPage />} />
    </Routes>
  );
}

export default App;
