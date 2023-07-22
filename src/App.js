import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ItemDescription from './pages/ItemDescription/ItemDescription';
import useDataWithCache from './helpers/fetchData';
import { useEffect, useState } from 'react';

function App() {
  const {data, error, loading} = useDataWithCache('https://itx-frontend-test.onrender.com/api/product')
  const [searchTerm, setSearchTerm] = useState('');

  return (
      <div className='App'>
        <Navbar setSearchTerm={setSearchTerm} />
        <main className='main-container'>
          <Routes>
            <Route path='/' element={<Home searchTerm={searchTerm} data={data} error={error} loading={loading} />} />
            <Route path='/:id' element={<ItemDescription />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
