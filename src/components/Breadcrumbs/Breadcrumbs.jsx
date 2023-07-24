import {Link, useLocation} from 'react-router-dom'

import './BreadcrumbsStyles.css'

const Breadcrumbs = ({data}) => {
    const { pathname } = useLocation();
    const isHome = pathname === "/"
    const currentItemId = pathname.split('/').slice(1)[0]
    const currentItemObject = data?.filter(el=> el.id === currentItemId)[0]

    const itemName = `${currentItemObject?.brand} ${currentItemObject?.model}`
    return (
        <p className='breadcrumbs'>
            <Link to="/">Home</Link>
            {!isHome && currentItemId ? 
                <span> / <Link to={`/${currentItemId}`}>{itemName}</Link></span>
            :<></>
            }
        </p>
    )
}

export default Breadcrumbs