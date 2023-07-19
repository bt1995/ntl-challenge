import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const filterData = () => {

  }

  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <Link to={'/'}><img src='https://napptilus.com/wp-content/uploads/sites/4/2018/03/group-12-1.png' className='navbar-img' /></Link>
            <div className='search-area'><input type='text' onChange={filterData} /></div>
        </div>
    </div>
  )
}

export default Navbar