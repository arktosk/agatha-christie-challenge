import React, { Component } from 'react';
import { doCreateUserWithEmailAndPassword } from './../../firebase';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    const {
      email,
      passwordOne,
    } = this.state;
    
    const { history } = this.props;

    doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log(authUser);
        this.setState({ ...INITIAL_STATE });
        history.push('/');
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
    return (
      <div className="login-form">
        <form onSubmit={this.onSubmit}>
          <div>
            <label>username:</label>
            <input
              className="login-form__input login-form__input--login"
              type="text"
              value={username}
              onChange={event => this.setState(byPropKey('username', event.target.value))}
            />
          </div>
          <div>
            <label>email:</label>
            <input
              className="login-form__input login-form__input--login"
              type="email"
              value={email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
            />
          </div>
          <div>
            <label>passwordOne:</label>
            <input
              className="login-form__input login-form__input--login"
              type="password"
              value={passwordOne}
              onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            />
          </div>
          <div>
            <label>passwordTwo:</label>
            <input
              className="login-form__input login-form__input--login"
              type="password"
              value={passwordTwo}
              onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            />
          </div>
          <button type="submit">
            Sign Up
          </button>
          { error && <p>{error.message}</p> }
        </form>
      </div>
    );
  }
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

export default LoginForm;
