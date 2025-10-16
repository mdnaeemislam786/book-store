import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;