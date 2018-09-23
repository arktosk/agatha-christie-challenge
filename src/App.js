import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h1 className="app__title">Agatha Christie Challenge</h1>
        </header>
        <div className="app__content">
          <Router>
            <Route path="/" component={Home} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
