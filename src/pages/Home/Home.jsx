import React from 'react'

import './Home.css'
import ItemCard from '../../components/ItemCard/ItemCard'
import useFetchData from '../../helpers/fetchData'

const Home = () => {
  // Here I'm trying to get the items from localstorage.
  const {loading, data, error} = useFetchData("https://itx-frontend-test.onrender.com/api/product")
  return (
    <div className='home-page-container'>
        <ItemCard
          loading={loading}
          data={data}
          error={error}
         />   
    </div>
  )
}

export default Home