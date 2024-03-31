import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { Header } from './Header/Header';
import { Characters } from './Characters/Characters';
import { Episode } from './Episode/Episode';
import { Location } from './Location/Location';
import { CharacterCard } from './CharacterCard/CharacterCard';
import { EpisodeCard } from './EpisodeCard/EpisodeCard';
import { LocationCard } from './LocationCard/LocationCard';
import { NotFoundPage } from './pages/NotFoundPage';
import { AuthProvider } from './AuthProvder';
import { LoginPage } from './pages/LoginPage';
import { PrivateRoute } from './PrivateRoute';


function App() {
  
  return( <>
    <AuthProvider>    
      <Header /> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/characters' element={<PrivateRoute> <Characters /> </PrivateRoute>} />
        <Route path='/characters/:CharactersId' element={<PrivateRoute><CharacterCard /></PrivateRoute>} />
        <Route path='/episode' element={<PrivateRoute><Episode /></PrivateRoute>} />
        <Route path='/episode/:EpisodeId' element={<PrivateRoute><EpisodeCard /></PrivateRoute>} />
        <Route path='/location' element={<PrivateRoute><Location /></PrivateRoute>} />
        <Route path='/location/:LocationId' element={<PrivateRoute><LocationCard /></PrivateRoute>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
    <Routes></Routes>
  </>)
}

export default App;
