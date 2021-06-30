import React from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

const Bookshelf = (props) => {
  const { title } = props;

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <BooksGrid />
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  title: PropTypes.string
}

export default Bookshelf
