import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <div className='-z-50'>
      <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default App;