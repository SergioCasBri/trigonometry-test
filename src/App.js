import {Route, Routes} from 'react-router';
import './App.css';
import Inicio from './pages/Inicio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Inicio/>}/> 
      </Routes>
    </div>
  );
}

export default App;
