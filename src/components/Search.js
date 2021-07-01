/**
 * @file Renders the search page
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'

class Search extends React.Component {

  /**
   * @type {object}
   * @property {string} query - search query
   */
  state = {
    query: ''
  }

  /**
   * Handle search input change event
   * @param {object} event - DOM event object
   */
  handleChange = event => {
    const { value } = event.target;

    this.setState(() => ({
      query: value
    }), () => this.props.onSearch(this.state.query))
  };

  /**
   * Handle 'Close' link click
   */
  handleClick = () => {
    this.props.onResetSearchResults()
  };

  /**
   * @param {object} book - book object
   */
  onBookUpdate = book => {
    this.props.onBookUpdate(book);
  };

  /**
   * @see {@link https://reactjs.org/docs/react-dom.html#render}
   */
  render() {
    const { onBookUpdate, handleChange, handleClick } = this;
    const { query } = this.state;
    const { searchResults } = this.props;

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search' onClick={handleClick}>
            Close
          </Link>

          <div className='search-books-input-wrapper'>
            <input
              type='text'
              value={query}
              placeholder='Search by title or author'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <BooksGrid
            books={searchResults}
            onBookUpdate={onBookUpdate}
          />
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  onBookUpdate: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onResetSearchResults: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired
};

export default Search;
