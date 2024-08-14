import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import EmailVerified from './components/EmailVerified/EmailVerified';
import EmailVerification from './components/EmailVerification/EmailVerification';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email-verified" element={<EmailVerified />} />
        <Route path="/verify-email" element={<EmailVerification />} />
      </Routes>
    </div>
  );
};

export default App;

