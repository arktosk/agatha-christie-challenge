import React, { Component } from "react";
// import { connect } from "react-redux";

class BookListItem extends Component {
  render() {
    const { book } = this.props;
    return (
      <div key="toDoName" className="book">
        <h4 className="book__title">
          {book.title}
        </h4>
      </div>
    );
  }
}

export default BookListItem;