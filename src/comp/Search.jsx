import React from 'react'
import './Search.css'
function Search() {
  return (
    <div className='navbar navbar-dark bg-dark'>
        <h2 className="navbar-brand">Store</h2>
        <form className='w-75 text-end'>
            <input type="text" className='border' placeholder='Search...' />
        </form>

    </div>
  )
}

export default Search