/* eslint-disable react/jsx-no-undef */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, Footer } from './components/layout';
import Home from './pages/Home';


import Container from './components/Container';
import ProductList from './pages/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


 function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);

//local storage
localStorage.setItem("myFirstKey", "This is the value")
localStorage.setItem("userName", "Bisrat Tadesse")
localStorage.setItem("myFirstInteger", 7)

 
let myFirstKey = localStorage.getItem("myFirstKey")
console.log("myFirstKey:", myFirstKey)