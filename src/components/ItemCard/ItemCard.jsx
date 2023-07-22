import React from 'react'
import { Link } from "react-router-dom";

import './ItemCard.css'

const ItemCard = ({loading, data, error}) => {
  return (
    <>
        {
            loading ? <p>Loading...</p> 
            : error ? <p>An error occured</p> :
            data?.map(el=> (
                <div className="item-card" key={el.id}>
                    <Link to={`/${el.id}`}>
                        <div className='item-card-img'><img src={el?.imgUrl} alt="Product" /></div>
                        <div className="item-card-content">
                            <p>Brand: {el?.brand}</p>
                            <p>Model: {el?.model}</p>
                            <p>Price: {el?.price}</p>
                        </div>
                    </Link>
                </div>
            ))
        }
    </>
  )
}

export default ItemCard