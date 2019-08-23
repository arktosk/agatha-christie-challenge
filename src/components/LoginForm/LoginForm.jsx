import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthenticationContext } from '../../contexts/AuthProvider';

const LoginForm = () => {
  const {
    user, signIn, error, isLoading,
  } = useContext(AuthenticationContext);
  const [email, setEmail] = useState('test@cube11.pl');
  const [password, setPassword] = useState('1234test');

  const onSubmit = (event) => {
    event.preventDefault();
    signIn(email, password);
  };

  if (user) return <Redirect to="/account" />;

  return (
    <div className="login-form">
      {isLoading ? (
        <div>
        Loading....
        </div>
      ) : (
        <form onSubmit={onSubmit} autoComplete="on">
          {error ? (
            <div>
              {error.message}
            </div>
          ) : null}
          <div>
            <label htmlFor="email">
              <span>email: </span>
              <input
                className="login-form__input login-form__input--email"
                name="email"
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <span>password: </span>
              <input
                className="login-form__input login-form__input--password"
                name="password"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </label>
          </div>
          <button type="submit">
            Sign In
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
