import { useState } from 'react';

import './Home.css'
import ItemCard from '../../components/ItemCard/ItemCard'

const Home = ({data, loading, error}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data?.filter(el =>
      el.brand.toLowerCase().includes(searchTerm) ||
      el.model.toLowerCase().includes(searchTerm)
  );

  return (
    <div className='home-page-container'>
        <div className='search-area'><input type='text' onChange={(e)=> setSearchTerm(e.target.value.trim().toLowerCase())} /></div>
        <ItemCard
          loading={loading}
          data={filteredData}
          error={error}
         />   
    </div>
  )
}

export default Home