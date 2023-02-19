import React from "react";
import Navbar from "./Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Account from "../Pages/Account";
import Products from "../Pages/Products";

function Header(){
    return(
        <div>
                    
               <Navbar/>
               <Routes>
                    <Route path="/" component={Home}></Route>
                    <Route path="/About" component={About}></Route>
                    <Route path="/Products" component={Products}></Route>
                    <Route path="/Account" component={Account}></Route>
               </Routes>
        </div>
       );
    
}

export default Header;