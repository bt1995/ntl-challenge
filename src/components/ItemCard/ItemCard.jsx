import React from 'react'

import './ItemCard.css'
import useFetchData from '../../helpers/fetchData'

const ItemCard = () => {

    const {loading, data, error } = useFetchData("https://itx-frontend-test.onrender.com/api/product")
  return (
    <>
        {
            loading ? <p>Loading ...</p> 
            : error ? <p>An error occured</p> :
            data.map(el=> (
                <div className="item-card" key={el.id}>
                    <img src={el?.imgUrl} alt="Product" />
                    <div className="item-card-content">
                        <p>Brand: {el?.brand}</p>
                        <p>Model: {el?.model}</p>
                        <p>Price: {el?.price}</p>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default ItemCard