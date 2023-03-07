import React, { Component , useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {FaBars} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';

const Navbar = () => {
    // state= {clicked: false};
    // handleClick = ()=>{
    //     this.setState({clicked:!this.state.clicked})
    // }
    const [Mobile, setMobile] = useState(false);
    return(
        <div className="mainnav">
                <div className="logo">
                    <img src="https://as2.ftcdn.net/v2/jpg/02/55/20/15/1000_F_255201583_6S7Da1iJJz1qehOOPCiUmAwiPwSLN3jK.jpg" height={50} width={50}></img>

                </div>
            
                <div className={Mobile? "navlink-mobile" : "navlink ul"} onClick={() => setMobile(false)}>
                    <ul>
                     <Link to="/"><li>Home</li></Link>
                     <Link to="/About"><li>About</li></Link>
                     <Link to="/Products"><li>Products</li></Link>
                     <Link to="/Account"><li>Account</li></Link>
                    </ul>
                </div>
               
               
                    <button className="mob" onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <ImCross/>  :  <FaBars/>}
                    </button>
               
            </div>
        
    );
}
export default Navbar;