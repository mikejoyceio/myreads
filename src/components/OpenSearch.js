/**
 * @file Renders the open search button
 */

import React from 'react'
import { Link } from 'react-router-dom'

const OpenSearch = () => {
  return (
    <div className='open-search'>
      <Link to='/search' className='button'>
        Add a book
      </Link>
    </div>
  )
};

export default OpenSearch;
