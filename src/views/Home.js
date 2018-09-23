import React, { Component } from 'react';
import BookList from './../components/BookList/BookList';

class Home extends Component {
  render() {
    return (
      <div className="page">
        <BookList />
      </div>
    );
  }
}

export default Home;
