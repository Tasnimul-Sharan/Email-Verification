import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailVerified = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to the login page after 5 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <svg
          className="mx-auto mb-4 w-16 h-16 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2l4 -4m-6 8l-4 -4m6 -4l4 4"
          />
        </svg>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Email Verified!</h2>
        <p className="text-gray-600 mb-6">Your email has been successfully verified. You can now log in to your account.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default EmailVerified;
