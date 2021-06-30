import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Bookshelves from './components/Bookshelves'
import Search from './components/Search'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route
          exact
          path='/'
          render={() => (
            <Bookshelves />
          )}
        />

        <Route
          path='/search'
          render={() => (
            <Search />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
