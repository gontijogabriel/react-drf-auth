import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:8000/api/v1';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    cpf: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/user/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate('/login');
      } else {
        const data = await response.json();
        console.error(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen mt-[-72px] bg-gray-300">
      <form onSubmit={handleRegister} className="p-6 bg-white rounded shadow-md w-80">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-700">Register</h2>
        {Object.keys(formData).map((key) => (
          <div className="mb-4" key={key}>
            <label className="block mb-1 text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              type={key === 'password' ? 'password' : 'text'}
              name={key}
              value={(formData as any)[key]}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
};

export default Register;
