import React, { useState } from 'react';

const CreateUserPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Creating user with name: ${name} and email: ${email}`);
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <input type="submit" value="Create User" />
      </form>
    </div>
  );
};

export default CreateUserPage;