import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import './ItemDescription.css'
import useFetchData from '../../helpers/fetchData'
import Dropdown from '../../components/Dropdown/Dropdown';
import { setItemCount } from '../../redux/slices/itemListSlice';
import AddToCartBtn from '../../components/AddToCartBtn/AddToCartBtn';
import { objectToMap } from '../../data/phoneObject';
import PhoneImage from '../../components/PhoneImage/PhoneImage';

const ItemDescription = () => {
  const [colorCode, setColorCode] = useState(null)
  const [storageCode, setStorageCode] = useState(null)
  let { id } = useParams()
  const dispatch = useDispatch()
  const isBtnActive = colorCode && storageCode
  const {loading, data, error} = useFetchData("https://itx-frontend-test.onrender.com/api/product/"+id)
  
  const useAddToCartHandler = async () => {
    // Before handling the cart, I'm checking if the user have choosen the color and storage previously.
    if(!isBtnActive) return alert("You must choose both color and storage to continue.")
    const newColorCode = parseInt(colorCode)
    const newStorageCode = parseInt(storageCode)
    
    const dataAsBody = {
      id, 
      colorCode: newColorCode, 
      storageCode: newStorageCode
    }

    const {data} = await axios.post("https://itx-frontend-test.onrender.com/api/cart", dataAsBody)

    // Here what I'm doing is I'm checking if a previous count exists or not and according to that i set the cart quantity on localstorage.
    let previousCount = localStorage.getItem('cartListAmount')
    let whatNumber = previousCount ? parseInt(previousCount) : 0
    localStorage.setItem('cartListAmount', whatNumber + data.count)
    dispatch(setItemCount(whatNumber === 0 ? 1 : whatNumber))
  }

  return (
    <div className='item-description-wrapper'>
        {
          loading ? <p>Loading...</p>
          : error ? <p>Some error occured...</p>
          : 
            <>
              <PhoneImage imgUrl={data?.imgUrl} brandName={data?.brand} />
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
                  <AddToCartBtn isBtnActive={isBtnActive} useAddToCartHandler={useAddToCartHandler} />
                </div>
              </div>
            </>
        }
    </div>
  )
}

export default ItemDescription