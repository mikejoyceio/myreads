import React from 'react'
import OpenSearch from './OpenSearch'
import Bookshelf from './Bookshelf'

const Bookshelves = () => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <Bookshelf title={'Currently Reading'} />
          <Bookshelf title={'Want to Read'} />
          <Bookshelf title={'Read'} />
        </div>
      </div>
      <OpenSearch />
    </div>
  )
}

export default Bookshelves
