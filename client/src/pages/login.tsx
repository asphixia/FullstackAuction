import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate, useLocation } from 'react-router-dom';
import { LOGIN } from '../graphql/userGQL';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const selectedAuction = location.state?.selectedAuction;

  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted: ({ login }) => {
      if (login) {
        const userId = login._id;
        if (selectedAuction) {
          navigate(`/auctions/${selectedAuction._id}`, { state: { selectedAuction, userId } });
        }
      }
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login({ variables: { username, password } });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
   
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <label className="mb-2">Username:</label>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded" />
      <label className="mb-2">Password:</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded" />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Login</button>
    </form>
  );
};

export default LoginPage;