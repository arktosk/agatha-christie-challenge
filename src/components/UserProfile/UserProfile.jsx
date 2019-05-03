import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ user }) => {
  const { email, photoURL, emailVerified } = user;

  const [displayName] = useState(user.displayName || '');

  return (
    <div>
      <header>
        <h3>
          Hello
          {displayName ? ` ${displayName}` : ` Anonymous (${email})`}
        </h3>
      </header>
      <div>
        <div>
          <span>displayName: </span>
          <strong>{displayName || 'Anonymous'}</strong>
          {/* <input
            type="text"
            value={displayName}
            onChange={event => setDisplayName(event.target.value)}
          /> */}
          <button type="button">
            <span role="img" aria-label="Edit user name">✏️</span>
          </button>
        </div>
        <div>
          <span>email: </span>
          <strong>{email}</strong>
          <button type="button">
            <span role="img" aria-label="Edit email">✏️</span>
          </button>
        </div>
        <div>
          <span>photoURL: </span>
          <strong>{photoURL || '(...)'}</strong>
          <button type="button">
            <span role="img" aria-label="Edit photoURL">✏️</span>
          </button>
        </div>
        <div>
          <span>emailVerified: </span>
          <strong>{emailVerified ? '✔' : '✘'}</strong>
        </div>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    photoURL: PropTypes.string,
    emailVerified: PropTypes.bool,
  }).isRequired,
};

export default UserProfile;
