/**
 * @file Class representing a book
 */

import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {
  constructor(props) {
    super(props)
    this.book = props.book;
  }

  /**
   * @type {object}
   * @property {string} bookshelf - the book's bookshelf
   */
  state = {
    bookshelf: this.props.book.shelf ? this.props.book.shelf : 'none'
  }

  /**
   * Handle select change
   * @param {object} event - DOM event object
   */
  handleChange = event => {
    const { value } = event.target;

    this.setState(() => ({
      bookshelf: value
    }), () => this.props.onBookUpdate({
        ...this.book,
        shelf: this.state.bookshelf
      }))
  };

  /**
   * @see {@link https://reactjs.org/docs/react-dom.html#render}
   */
  render() {
    const { book } = this;
    const { bookshelf } = this.state;

    return (
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail: 'https://via.placeholder.com/128x185?text=No%20Image' })`
            }}
          />
          <div className='book-shelf-changer'>
            <select
              value={bookshelf}
              onChange={this.handleChange}
            >
              <option value='move' disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>
          {book.title}
        </div>
        <div className='book-authors'>
          {book.authors && (
            book.authors.map( (author, index) => (
              <div key={index}>
                {author}
              </div>
            ))
          )}
        </div>
      </div>
    )
  }
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onBookUpdate: PropTypes.func.isRequired
};

export default Book;
