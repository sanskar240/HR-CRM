import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5003/login', { email, password });
      localStorage.setItem('token', response.data.token);
      const { role } = JSON.parse(atob(response.data.token.split('.')[1]));
  
      switch (role) {
        case 'ADMIN':
          navigate('/admin');
          break;
        case 'USER':
          navigate('/user');
          break;
        case 'CREATOR':
          navigate('/creator-dashboard');
          break;
        case 'PUBLISHER':
          navigate('/publisher-dashboard');
          break;
        case 'AUDITOR':
          navigate('/auditor-dashboard');
          break;
        case 'REVIEWER':
          navigate('/reviewer-dashboard');
          break;
        default:
          // Handle default redirect or error
          break;
      }
    } catch (error) {
      console.error("Error Logging in", error);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <div className="space-y-4">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
