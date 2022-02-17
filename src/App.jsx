import './App.scss';
import {Navbar,Login} from './pages/index'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
