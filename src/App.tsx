import CharactersPage from './components/Characters-page';
import './App.css';
import CharacterPage from './components/Character-page';
import { Route, Routes } from 'react-router-dom';
import SearchComponent from './components/SearchComponent';
import LocationComponent from './components/LocationComponent';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CharactersPage />} />
      <Route path='/:id' element={<CharacterPage />} />
      <Route path='/search' element={<SearchComponent />} />
      <Route path='/locations' element={<LocationComponent />} />
    </Routes>
  );
}

export default App;
