import React from 'react'
import useFetchData from '../../helpers/fetchData'

const ItemCard = () => {

    const {loading, data, error } = useFetchData("https://itx-frontend-test.onrender.com/api/product")
  return (
    <div>
        {
            loading ? <p>Loading ...</p> 
            : error ? <p>An error occured</p> :
            data.map(el=> <p key={el.id}>{el.model}</p>)
        }
    </div>
  )
}

export default ItemCard