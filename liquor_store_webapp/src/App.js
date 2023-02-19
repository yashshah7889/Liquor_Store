import React from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Account from "./Pages/Account";
import Products from "./Pages/Products"
function App() {
  
    return (
    <div>
      <BrowserRouter>
       <Navbar/>
               <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/About" element={<About/>}></Route>
                    <Route path="/Products" element={<Products/>}></Route>
                    <Route path="/Account" element={<Account/>}></Route>
               </Routes>
               </BrowserRouter>
    </div>
      
   
    
    
    
  );
  
}

export default App;
