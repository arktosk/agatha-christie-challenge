import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthenticationContext } from '../../contexts/AuthProvider';
import StorageImage from '../Firebase/StorageImage';

const EditableField = ({ label, value, save = false }) => {
  const [isEditing, setEditing] = useState(false);
  const [valueState, setValue] = useState(value);

  const saveValue = (event) => {
    event.preventDefault();
    setEditing(false);

    // Return because value didn't change.
    if (valueState === value) return;
    if (typeof save === 'function') save({ value: valueState });
  };

  return (
    <div>
      <span>{`${label}: `}</span>
      {!isEditing ? (
        <>
          <strong>{valueState}</strong>
          {save ? (
            <button type="button" title={`Edit ${label}`} onClick={() => setEditing(true)}>
              <span role="img" aria-label={`Edit ${label}`}>✏️</span>
            </button>
          ) : null}
        </>
      ) : (
        <>
          <input
            type="text"
            value={valueState}
            onChange={event => setValue(event.target.value)}
          />
          <button type="button" title={`Save ${label}`} onClick={saveValue}>
            <span role="img" aria-label={`Save ${label}`}>✔</span>
          </button>
          <button type="button" title="Cancel" onClick={() => setEditing(false)}>
            <span role="img" aria-label="Cancel">✘</span>
          </button>
        </>
      )}
    </div>
  );
};
EditableField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  save: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]),
};

const UserProfile = () => {
  const { user, updateProfile } = useContext(AuthenticationContext);
  const {
    displayName,
    email,
    photoURL,
    emailVerified,
  } = user;

  return (
    <div>
      <header>
        <h3>
          {`Hello ${displayName || 'Anonymous'}`}
        </h3>
      </header>
      <StorageImage path="avatars/SXMZp4OdFcZQiklgdOkFH5DMJNj2.png" alt="" />
      {/* <img src={photoURL} alt={displayName || 'Anonymous'} /> */}
      <div>
        <EditableField
          value={displayName || ''}
          label="User name"
          save={({ value }) => updateProfile({ displayName: value })}
        />
        <EditableField value={email} label="Email" />
        <EditableField
          value={photoURL || '(...)'}
          label="Avatar"
          save={({ value }) => {
            updateProfile({ photoURL: value });
          }}
        />
        <EditableField value={emailVerified ? '✔' : '✘'} label="Is email verified" />
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
