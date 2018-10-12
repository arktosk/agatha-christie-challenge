import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from './../components/LoginForm/LoginForm';

class Login extends Component {
  render() {
    const { history } = this.props
    return (
      <div className="page">
        <LoginForm history={history} />
      </div>
    );
  }
}

export default withRouter(Login);
