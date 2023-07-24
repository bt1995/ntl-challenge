import './Navbar.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

const Navbar = ({data}) => {
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <Link to={'/'}><img src='https://napptilus.com/wp-content/uploads/sites/4/2018/03/group-12-1.png' className='navbar-img' /></Link>
            <Breadcrumbs data={data} />
            <ItemCount />
        </div>
    </div>
  )
}

export default Navbar