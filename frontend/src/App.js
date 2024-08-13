import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import EmailVerified from './components/EmailVerified/EmailVerified';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/email-verified" element={<EmailVerified />} />
      </Routes>
    </div>
  );
};

export default App;

