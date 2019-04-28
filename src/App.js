import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import BookList from './components/BookList/BookList';
import logo from './agatha-christie-s-signature.png';
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
          <div className="app__content">
            <BookList />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
