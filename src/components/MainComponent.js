import React, { useState } from 'react';
import UserForm from './UserForm';
import UserInfo from './UserInfo';

const MainComponent = () => {
  const [user, setUser] = useState(null);

  const handleFormSubmit = async (username) => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) {
        throw new Error('User not found.');
      }
  
      const userData = await userResponse.json();
  
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!reposResponse.ok) {
        throw new Error('Repos not found.');
      }
  
      const reposData = await reposResponse.json();
  
      setUser({ ...userData, repos: reposData });
    } catch (error) {
      console.error('Error from pull out the data:', error.message);
      setUser(null); 
  

      window.alert(error.message);
    }
  };

  return (
    <div>
      <h1>GitHub Explorer</h1>
      <UserForm onFormSubmit={handleFormSubmit} />
      <UserInfo user={user} />
    </div>
  );
};

export default MainComponent;
