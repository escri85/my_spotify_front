import './App.scss';
import {Navbar,Login} from './pages/index'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CardArtist from './components/card_artist/CardArtist';
import Call from './context/Call';
import { useContext } from 'react';
import {ContextoApi} from './context/llamada-api'

function App() {
  const {album,track,artist}=useContext(ContextoApi)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Call artist={artist}/>}/>
      <Route path='/cardArtist/:name' element={<CardArtist artist={artist} album={album}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/card' element={<CardArtist/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
