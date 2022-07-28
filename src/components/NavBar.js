import React, { useEffect, useState } from 'react'

function NavBar(props) {

    return (
      <nav id='header'>
        <h1 id='title'>The cocktail hub</h1>
        <input type="text" onChange={(event) => props.onSearch(event.target.value)} placeholder='search here...' />
        <button ><i className='fas fa-search'></i></button>
      </nav>
    )
  }

export default NavBar