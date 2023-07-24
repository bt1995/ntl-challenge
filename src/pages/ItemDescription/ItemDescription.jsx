import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import './ItemDescription.css'
import useFetchData from '../../helpers/fetchData'
import Dropdown from './Dropdown/Dropdown';
import { setItemCount } from '../../redux/slices/itemListSlice';

const ItemDescription = () => {
  const [colorCode, setColorCode] = useState(null)
  const [storageCode, setStorageCode] = useState(null)
  let { id } = useParams()
  const dispatch = useDispatch();
  const isBtnActive = colorCode && storageCode
  const {loading, data, error} = useFetchData("https://itx-frontend-test.onrender.com/api/product/"+id)
  
  const useAddToCartHandler = async () => {
    if(!isBtnActive) return alert("You must choose both color and storage to continue.");
    const newColorCode = parseInt(colorCode)
    const newStorageCode = parseInt(storageCode)
    
    const dataAsBody = {
      id, 
      colorCode: newColorCode, 
      storageCode: newStorageCode
    }

    const {data} = await axios.post("https://itx-frontend-test.onrender.com/api/cart", dataAsBody);
    let previousCount = localStorage.getItem('cartListAmount')
    let whatNumber = previousCount ? parseInt(previousCount) : 0
    localStorage.setItem('cartListAmount', whatNumber + data.count)
    dispatch(setItemCount(whatNumber === 0 ? 1 : whatNumber))
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
    <div className='item-description-wrapper'>
        {
          loading ? <p>Loading...</p>
          : error ? <p>Some error occured...</p>
          : 
            <>
              <div className='item-image-container'>
                <img src={data?.imgUrl} alt="Mobile Image" />
              </div>
              <div className='item-description-container'>
                <div className='item-content'>
                  {Object.keys(objectToMap).map((el)=>{
                    const isCamera = el === "Camera";
                    const whatData = isCamera ? data?.[objectToMap[el]][0] : data?.[objectToMap[el]]
                    return <p><span className='item-title'>{el}:</span> <span className='item-data'>{whatData}</span></p>
                  })}
                </div>

                <div className='item-actions item-content'>
                  <Dropdown setColorCode={setColorCode} options={data?.options.colors} label="Color:" />
                  <Dropdown setStorageCode={setStorageCode} options={data?.options.storages} label="Storage:" />
                  <button className={`add-to-cart-btn ${isBtnActive ? 'add-active': 'add-disabled'}`} onClick={useAddToCartHandler}>Add to cart</button>
                </div>
              </div>
            </>
        }
    </div>
  )
}

export default ItemDescription