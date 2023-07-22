import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './ItemDescription.css'
import useFetchData from '../../helpers/fetchData'
import Dropdown from './Dropdown/Dropdown';

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
  }

  const objectToMap = {
    "Brand": "brand",
    "Model": "model",
    "Price": "price",
    "CPU": "cpu",
    "RAM": "ram",
    "OS": "brand",
    "Resolution": "displayResolution",
    "Battery": "battery",
    "Camera": "primaryCamera",
    "Dimension": "dimentions",
    "Weight": "weight",
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
                  {Object.keys(objectToMap).map((el)=>{
                    const isCamera = el === "Camera";
                    const whatData = isCamera ? data?.[objectToMap[el]][0] : data?.[objectToMap[el]]
                    return <p><span className='item-title'>{el}:</span> <span className='item-data'>{whatData}</span></p>
                  })}
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