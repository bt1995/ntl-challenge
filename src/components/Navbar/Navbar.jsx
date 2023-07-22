import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ setSearchTerm}) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <Link to={'/'}><img src='https://napptilus.com/wp-content/uploads/sites/4/2018/03/group-12-1.png' className='navbar-img' /></Link>
            {isHome ? <div className='search-area'><input type='text' onChange={(e)=> setSearchTerm(e.target.value.trim().toLowerCase())} /></div> : <></>}
        </div>
    </div>
  )
}

export default Navbar