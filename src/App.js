import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './HomePage';
import { Header } from './Header';
import { Characters } from './Characters';
import { Episode } from './Episode';
import { Location } from './Location';
import { CharacterCard } from './CharacterCard';
import { EpisodeCard } from './EpisodeCard';
import { LocationCard } from './LocationCard';
import { NotFoundPage } from './NotFoundPage';




function App() {
  
  return( <>
    <div>
      <Header />
    </div>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/characters' element={<Characters />} />
      <Route path='/characters/:CharactersId' element={<CharacterCard />} />
      <Route path='/episode' element={<Episode />} />
      <Route path='/episode/:EpisodeId' element={<EpisodeCard />} />
      <Route path='/location' element={<Location />} />
      <Route path='/location/:LocationId' element={<LocationCard />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </>)
}

export default App;
