/**
 * @file Renders a single bookshelf
 */

import React from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

const Bookshelf = (props) => {
  const { title, books } = props;

  /**
   * @param {object} book - book object
   */
  const onBookUpdate = (book) => {
    props.onBookUpdate(book);
  };

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <BooksGrid
          books={books}
          onBookUpdate={onBookUpdate}
        />
      </div>
    </div>
  )
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired
};

export default Bookshelf;
