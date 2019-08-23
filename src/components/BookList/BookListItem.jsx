import React from 'react';
import PropTypes from 'prop-types';

import './BookListItem.scss';

const BookListItem = ({ book }) => (
  <div key="toDoName" className="book">
    {`${book.title} (${book.publication.year})`}
  </div>
);

BookListItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    publication: PropTypes.shape({
      year: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default BookListItem;
