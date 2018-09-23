import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Agatha Christie Challenge</h1>
        </header>
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
