import './Home.css'
import ItemCard from '../../components/ItemCard/ItemCard'

const Home = ({data, loading, error, searchTerm}) => {

  const filteredData = data?.filter(el =>
      el.brand.toLowerCase().includes(searchTerm) ||
      el.model.toLowerCase().includes(searchTerm)
  );

  return (
    <div className='home-page-container'>
        <ItemCard
          loading={loading}
          data={filteredData}
          error={error}
         />   
    </div>
  )
}

export default Home