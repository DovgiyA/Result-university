import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Header/Header';
import { AuthProvider } from './AuthProvder'; 
import { PrivateRoute } from './PrivateRoute';
import { LazyElement } from './LazyElement/LazyElement';

function App() {  
  
  return( <>
    <AuthProvider>    
      <Header /> 
      <Routes>
        <Route path='/' element={<LazyElement name='pages/HomePage' />} />
        <Route path='/login' element={<LazyElement name='pages/LoginPage' />} />
        <Route path='/characters' element={<PrivateRoute ><LazyElement name='Characters/Characters' /></PrivateRoute>} />
        <Route path='/characters/:CharactersId' element={<PrivateRoute><LazyElement name='CharacterCard/CharacterCard' /></PrivateRoute>} />
        <Route path='/episode' element={<PrivateRoute><LazyElement name='Episode/Episode' /></PrivateRoute>} />
        <Route path='/episode/:EpisodeId' element={<PrivateRoute><LazyElement name='EpisodeCard/EpisodeCard' /></PrivateRoute>} />
        <Route path='/location' element={<PrivateRoute><LazyElement name='Location/Location' /></PrivateRoute>} />
        <Route path='/location/:LocationId' element={<PrivateRoute><LazyElement name='LocationCard/LocationCard' /></PrivateRoute>} />
        <Route path='*' element={<LazyElement name='pages/NotFoundPage' />} />
      </Routes>
    </AuthProvider>
     </>)
  
}

export default App;
