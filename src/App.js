import logo from './logo.svg';
import './App.css';
import Login from './login'
import Logout from './logout'
import Admin from './admin'
import {BrowserRouter as Router , Link , Route , Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Router>
       <Routes>
       <Route path='/' element={<Login/>} />
       <Route path='/logout' element={<Logout/>} />
       <Route path='/admin' element={<Admin/>} />
       </Routes>

       </Router>

    </div>
  );
}

export default App;
