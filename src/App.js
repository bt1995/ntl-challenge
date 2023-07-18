import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ItemDescription from './pages/ItemDescription/ItemDescription';

function App() {
  return (
      <div className='App'>
        <Navbar />
        <main className='main-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<ItemDescription />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
