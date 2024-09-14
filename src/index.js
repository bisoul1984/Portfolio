import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, Footer } from './components/layout';

import Container from './components/Container';
import ProductList from './pages/ProductList';


 function App() {
  return (
    <>
      <Navbar />
      <ProductList />
      
      <Footer />
    </>
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