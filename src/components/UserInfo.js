import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div>
      <img src={user.avatar_url} alt="Profilna slika" />
      <h2>{user.name}</h2>
      <p><strong>Location:</strong>{user.location}</p>
      <p><strong>Details:</strong>{user.bio}</p>
      <h3>Repos:</h3>
      <ul>
        {user.repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
    repos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};

export default UserInfo;
