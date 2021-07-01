/**
 * @file Renders all bookshelves
 */

import React from 'react'
import PropTypes from 'prop-types'
import OpenSearch from './OpenSearch'
import Bookshelf from './Bookshelf'

const Bookshelves = (props) => {
  const { books } = props;

  /**
   * Bookshelves to be rendered
   * @type {array}
   */
  const bookshelves = [
    {
      title: 'Currently Reading',
      books: books.filter( book => book.shelf === 'currentlyReading')
    },
    {
      title: 'Want to Read',
      books: books.filter( book => book.shelf === 'wantToRead')
    },
    {
      title: 'Read',
      books: books.filter( book => book.shelf === 'read')
    }
  ]

  /**
   * @param {object} book - book object
   */
  const onBookUpdate = book => {
    props.onBookUpdate(book);
  };

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          {bookshelves && bookshelves.map((bookshelf, index) => (
            <Bookshelf
              key={index}
              title={bookshelf.title}
              books={bookshelf.books}
              onBookUpdate={onBookUpdate}
            />
          ))}
        </div>
      </div>
      <OpenSearch />
    </div>
  )
};

Bookshelves.propTypes = {
  books: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired
};

export default Bookshelves;
