import './App.css';
import { Navbar } from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/card' element={<Cart/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
