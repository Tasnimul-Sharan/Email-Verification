import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the email from local storage
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);


const handleVerify = async (e) => {
    e.preventDefault();
    console.log('Sending email:', email);
    console.log('Sending verification code:', verificationCode);
  
    try {
      const response = await axios.post('http://localhost:5000/api/users/verify', { email, verificationCode });
      Swal.fire({
        icon: 'success',
        title: 'Email Verified Successfully!',
        text: 'Your email has been verified. You can now log in.',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/');
      });
    } catch (error) {
      console.error('Verification failed:', error.response.data);
      Swal.fire({
        icon: 'error',
        title: 'Verification Failed',
        text: 'The verification code is incorrect. Please try again.',
        confirmButtonText: 'OK'
      });
    }
  };
  

  const handleResendCode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/resend-code', { email });
      Swal.fire({
        icon: 'success',
        title: 'Code Resent!',
        text: 'A new verification code has been sent to your email.',
        confirmButtonText: 'OK'
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Resend Failed',
        text: 'Unable to resend the verification code. Please try again later.',
        confirmButtonText: 'OK'
      });
      console.log(error, "error")
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Verify Your Email</h2>
        <form onSubmit={handleVerify} className="space-y-6">
          <input
            type="number"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Enter verification code"
            className="border p-3 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 w-full rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Verify
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Didn’t receive the code?{' '}
          <button
            onClick={handleResendCode}
            className="text-indigo-600 font-bold hover:underline"
          >
            Resend Code
          </button>
        </p>
        {message && <p className="text-center text-green-500 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default EmailVerification;
