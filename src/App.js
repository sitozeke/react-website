import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import{Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' exact>
        <Route index element={<Home/>} />
        <Route path='services' element={<Services/>} />
        <Route path='sign-up' element={<SignUp/>} />
        <Route path='products' element={<Products/>} />


        
      </Route>
      </Routes>
    </>
  );
}

export default App;
