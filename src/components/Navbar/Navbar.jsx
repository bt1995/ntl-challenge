import './Navbar.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const Navbar = () => {
  
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <Link to={'/'}><img src='https://napptilus.com/wp-content/uploads/sites/4/2018/03/group-12-1.png' className='navbar-img' /></Link>
            <ItemCount />
        </div>
    </div>
  )
}

export default Navbar