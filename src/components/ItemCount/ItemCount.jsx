import React, { useEffect } from 'react'
import './ItemCountStyles.css'
import { useSelector } from 'react-redux'

const ItemCount = () => {
    const { itemCount } = useSelector(state=> state.itemList)

    useEffect(()=>{
    },[itemCount])

  return (
    <p className='item-count'>{itemCount}</p>
  )
}

export default ItemCount