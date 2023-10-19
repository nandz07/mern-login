
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Components/Header';
import Register from './Pages/Register';
import Login from './Pages/Login';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
