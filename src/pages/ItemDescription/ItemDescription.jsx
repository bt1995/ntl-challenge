import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './ItemDescription.css'
import useFetchData from '../../helpers/fetchData'
import Dropdown from './Dropdown';

const ItemDescription = () => {
  const [colorCode, setColorCode] = useState(null)
  const [storageCode, setStorageCode] = useState(null)
  let { id } = useParams();
  const {loading, data, error} = useFetchData("https://itx-frontend-test.onrender.com/api/product/"+id)
  
  const useAddToCartHandler = async () => {
    const newColorCode = parseInt(colorCode)
    const newStorageCode = parseInt(storageCode)
    const dataAsBody = {
      id, 
      colorCode: newColorCode, 
      storageCode: newStorageCode
    }
    const {data} = await axios.post("https://itx-frontend-test.onrender.com/api/cart", dataAsBody)
    console.log(data)
  }

  return (
    <div className='item-desc-container'>
        {
          loading ? <p>Loading...</p>
          : error ? <p>Some error occured...</p>
          : 
            <>
              <div className='item-image-container'>
                <img src={data?.imgUrl} alt="Mobile Image" />
              </div>
              <div className='item-description'>
                <div>
                  <p>Brand: {data?.brand}</p>
                  <p>Model: {data?.model}</p>
                  <p>Price: {data?.price}</p>
                  <p>CPU: {data?.cpu}</p>
                  <p>RAM: {data?.ram}</p>
                  <p>OS: {data?.brand}</p>
                  <p>Resolution: {data?.displayResolution}</p>
                  <p>Battery: {data?.battery}</p>
                  <p>Camera: {data?.primaryCamera[0]}</p>
                  <p>Dimension: {data?.dimentions}</p>
                  <p>Weight: {data?.weight}</p>
                </div>

                <div className='item-actions'>
                  <Dropdown setColorCode={setColorCode} options={data?.options.colors} label="Color:" />
                  <Dropdown setStorageCode={setStorageCode} options={data?.options.storages} label="Storage:" />
                  <button onClick={useAddToCartHandler}>Add to cart</button>
                </div>
              </div>
            </>
        }
    </div>
  )
}

export default ItemDescription