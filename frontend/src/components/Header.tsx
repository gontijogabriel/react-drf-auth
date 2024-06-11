// @ts-ignore
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SecuritySVG from '../assets/svg_security.svg';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

function Header({ isLoggedIn, onLogout }: HeaderProps) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      onLogout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <header className="p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={SecuritySVG} alt="Logo" className="h-10 w-10 mr-2" />
          <Link to="/" className="text-xl font-bold hover:text-gray-400">Auth React DRF</Link>
        </div>
        <div>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="mx-2 bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="mx-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="mx-2 bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;



