import './App.css';
import React,{useState} from 'react';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Newpassword from './components/pages/Newpassword';
import Forget from './components/pages/Forget';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [user, setuserlogin] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Home to="/" />
              ) : (
                <Login setuserlogin={setuserlogin} />
              )
            }
          />          
          <Route exact path="/Login" element={<Login setuserlogin={setuserlogin} />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Newpassword/:token" element={<Newpassword />} />
          <Route exact path="/Forget" element={<Forget />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
