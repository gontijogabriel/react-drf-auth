import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

interface LoginProps {
  onLogin: () => void;
}

const API_URL = 'http://localhost:8000/api/v1';

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.detail || 'Failed to login');
        setLoading(false);
        return;
      }

      const data = await response.json();
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      onLogin();
      navigate('/profile');
    } catch (error) {
      setError('Failed to fetch');
      console.error('Error:', error);
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="flex justify-center items-center h-screen mt-[-72px] bg-gray-300">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-md w-80">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-700">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600">Login</button>
      </form>
    </div>
  );
};

export default Login;
