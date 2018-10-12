import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app__header">
            <img src={logo} className="app__logo" alt="logo" />
            <h1 className="app__title">Agatha Christie Challenge</h1>
          </header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <div className="app__content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
