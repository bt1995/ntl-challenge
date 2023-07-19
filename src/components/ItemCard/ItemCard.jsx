import React from 'react'
import { Link } from "react-router-dom";

import './ItemCard.css'

const ItemCard = ({loading, data, error}) => {
  return (
    <>
        {
            loading ? <p>Loading...</p> 
            : error ? <p>An error occured</p> :
            data.map(el=> (
                <div className="item-card" key={el.id} >
                    <Link to={`/${el.id}`}>
                        <img src={el?.imgUrl} alt="Product" />
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