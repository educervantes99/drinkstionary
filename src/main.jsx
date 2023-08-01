import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav, Footer } from "./components";
import DrinksApp from './DrinksApp';
import { Drink, CategoryResult, About } from './pages';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <div className='maincontent'>
        <Routes>
          <Route path='/' element={<DrinksApp />} />
          <Route path='/about' element={<About />} />
          <Route path='/drink/:id' element={<Drink />} />
          <Route path='/category/:name' element={<CategoryResult />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
