import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Food } from './pages/Food';

const App = (props) => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/food' element={<Food />} />
    </Routes>
  );
};

export default App;
