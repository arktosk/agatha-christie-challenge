import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../actions";
import BookListItem from "./BookListItem";

class BookList extends Component {

  renderBooks() {

    const { books } = this.props;
    let Books = books.map((book, key) => {
      return <BookListItem key={key} book={book} />;
    });
    if (Books.length > 0) {
      return Books;
    }
    return (
      <div className="">
        <h4>There is no books :(</h4>
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <div className="books">
        <div className="books__container">
          {this.renderBooks()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ books }) => ({
    books: [...books]
});

export default connect(mapStateToProps, actions)(BookList);