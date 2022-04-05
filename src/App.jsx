import './App.scss';
import {Navbar} from './pages/index'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CardArtist from './components/card_artist/CardArtist';
import Call from './context/Call';
import { useContext } from 'react';
import {ContextoApi} from './context/llamada-api'
import Home from './pages/Home/Home';
import Tracks from './components/Tracks/Tracks';
import Footer from './pages/Footer/Footer';
import Albums from './components/Albums/Albums';

function App() {
  const {album,track,artist,inputValue,setInputValue}=useContext(ContextoApi)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
      <Route path='/' element={<Home artist={artist} inputValue={inputValue} setInputValue={setInputValue}/>}/>
      <Route path='/cardArtist/:name' element={<CardArtist artist={artist} album={album} track={track}/>}/>
      <Route path='/artist' element={<Call artist={artist}/>}/>
      <Route path='/track' element={<Tracks track={track}/>}/>
      <Route path='/album' element={<Albums album={album}/>}/>
    
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
