import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';

export const AuthenticationContext = React.createContext();

export const UserAuthentication = ({ children }) => {
  window.auth = auth;
  const [isLoading, setLoader] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => auth.onAuthStateChanged((currentUser) => {
    setLoader(false);
    setUser(currentUser || null);
  }), [user]);

  return (
    <AuthenticationContext.Provider
      value={{
        isLoading,
        error,
        user,
        signIn: (...args) => {
          setLoader(true);
          return auth.signInWithEmailAndPassword(...args)
            .then(() => {
              setLoader(false);
              setError(null);
            })
            .catch((currentError) => {
              setLoader(false);
              setError(currentError);
            });
        },
        signOut: () => {
          setLoader(false);
          return auth.signOut();
        },
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

UserAuthentication.propTypes = {
  children: PropTypes.element.isRequired,
};

export const Authenticate = AuthenticationContext.Consumer;
