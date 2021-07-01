/**
 * @file Renders the books grid
 */

import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BooksGrid = (props) => {
  const { books } = props;

  /**
   * @param {object} book - book object
   */
  const onBookUpdate = book => {
    props.onBookUpdate(book);
  };

  return (
    <ol className='books-grid'>
      {books.map( book => (
        <li key={book.id}>
          <Book
            book={book}
            onBookUpdate={onBookUpdate}
          />
        </li>
      ))}
    </ol>
  )
};

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired
};

export default BooksGrid;
