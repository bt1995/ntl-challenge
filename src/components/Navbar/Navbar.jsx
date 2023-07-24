import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <Link to={'/'}><img src='https://napptilus.com/wp-content/uploads/sites/4/2018/03/group-12-1.png' className='navbar-img' /></Link>
        </div>
    </div>
  )
}

export default Navbar