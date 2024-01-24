import React, { useState } from 'react';

const UserForm = ({ onFormSubmit }) => {
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        GitHub username:
        <input type="text" value={username} onChange={handleInputChange} />
      </label>
      <button type="submit">Find User</button>
    </form>
  );
};

export default UserForm;
