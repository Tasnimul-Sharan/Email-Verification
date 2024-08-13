import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { username, email, password });
      console.log(response, "response");
      
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'A verification email has been sent to your email address. Please check your inbox to verify your account.',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/login');
      });
      
    } catch (error) {
      console.error('Registration failed', error);
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'Something went wrong. Please try again.',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="border p-3 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border p-3 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border p-3 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 w-full rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 font-bold hover:underline">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
