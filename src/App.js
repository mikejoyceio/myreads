/**
 * @file Class representing the books app. Renders the bookshelves and search pages.
 */

import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Bookshelves from './components/Bookshelves'
import Search from './components/Search'
import './App.css'

class BooksApp extends React.Component {

  /**
   * @type {object}
   * @property {array} books - book objects
   * @property {array} searchResults - search results made up of book objects
   */
  state = {
    books: [],
    searchResults: []
  };

  /**
   * Update a book object
   * @param {object} book - book object
   */
  onBookUpdate = book => {

    let { books } = this.state;

    // If the books shelf is 'none', remove it
    if (book.shelf === 'none') {
      books = books.filter(b => b.id !== book.id);
    } else {

      const bookExists = books.filter(b => b.id === book.id).length;

      // If a search results book object exists in this.state.books, update it's shelf
      if (bookExists) {

        books.forEach(b => {
          if (b.id === book.id) {
            b.shelf = book.shelf;
          }
        })

      } else {
        books.push(book);
      }
    }

    this.setState((state) => ({
      books: books
    }))

    BooksAPI.update(book, book.shelf);
  };

  /**
   * Get search results
   * @param {string} query - search query
   */
  onSearch = query => {
    if (query !== '') {
      BooksAPI
        .search(query)
        .then( response => {
          let results = response.error === 'empty query' ? response.items : response;

          this.state.books.forEach(b => {

            results.forEach(srb => {

              // A search results book object exists in this.state.books, add a shelf property
              if (b.id === srb.id) {
                srb.shelf = b.shelf;
              }

            });

          })

          this.setState(() => ({
            searchResults: results
          }))

        })
    } else {
      this.setState(() => ({
        searchResults: []
      }))
    }
  };

  /**
   * Reset search results
   */
  onResetSearchResults = () => {
    this.setState(() => ({
      searchResults: []
    }))
  };

  /**
   * @see {@link https://reactjs.org/docs/react-component.html#componentdidmount}
   */
  componentDidMount() {
    BooksAPI.getAll()
      .then((response) => (
        this.setState(() => ({
          books: response
        }))
      ))
  }

  /**
   * @see {@link https://reactjs.org/docs/react-dom.html#render}
   */
  render() {
    const { onBookUpdate, onSearch, onResetSearchResults } = this;
    const { books, searchResults } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path='/'
          render={() => (
            <Bookshelves
              books={books}
              onBookUpdate={onBookUpdate}
            />
          )}
        />

        <Route
          path='/search'
          render={() => (
            <Search
              onBookUpdate={onBookUpdate}
              onSearch={onSearch}
              onResetSearchResults={onResetSearchResults}
              searchResults={searchResults}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp;
