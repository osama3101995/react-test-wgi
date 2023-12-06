import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Employees from './pages/Employees';
import { Nav } from './components/Navbar';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';



const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
