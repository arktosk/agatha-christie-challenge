import React, { useContext } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect, Link,
} from 'react-router-dom';

import { UserAuthentication, Authenticate, AuthenticationContext } from './contexts/AuthProvider';
// import BookList from './components/BookList/BookList';
import LoginForm from './components/LoginForm/LoginForm';
import Account from './pages/Account/Account';

import logo from './agatha-christie-s-signature.png';
import './App.scss';

const App = () => (
  <Router>
    <UserAuthentication>
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h1 className="app__title">Agatha Christie Challenge</h1>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/account">Account</Link>
          <Authenticate>
            {({ user, signOut }) => (!user ? (
              <>
                <span> | </span>
                <Link to="/login">Log In</Link>
              </>
            ) : (
              <>
                <span> | </span>
                <Link to="/logout" onClick={signOut}>Log Out</Link>
              </>
            ))
              }
          </Authenticate>
        </nav>
        <div className="app__content">
          <Switch>
            <Route path="/" exact component={null} />
            <Route path="/login" exact component={LoginForm} />
            <PrivateRoute path="/account" component={Account} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </UserAuthentication>
  </Router>
);

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthenticationContext);
  return (
    <Route
      {...rest}
      render={props => (user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            // eslint-disable-next-line react/prop-types
            state: { from: props.location },
          }}
        />
      ))}
    />
  );
};

export default App;
