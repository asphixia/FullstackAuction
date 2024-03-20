// LoginPage.tsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../graphql/userGQL';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted: ({ login }) => {
      if (login) {
        localStorage.setItem('token', login.token); // Store token in localStorage
        navigate('/frontpage'); // Redirect to front page
      }
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page refresh
    try {
      await login({ variables: { username, password } });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Log In" />
    </form>
  );
};

export default LoginPage;