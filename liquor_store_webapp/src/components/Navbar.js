import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component{
    state= {clicked: false};
    handleClick = ()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return(
        <div className="mainnav">
            <div className="logo">
                 <img src="https://as2.ftcdn.net/v2/jpg/02/55/20/15/1000_F_255201583_6S7Da1iJJz1qehOOPCiUmAwiPwSLN3jK.jpg" height={50} width={50}></img>

            </div>
            <div id="navlink" className={this.state.clicked? "#navlink active ul" : "#navlink ul"}>
                <ul >
                     <Link to="/"><li>Home</li></Link>
                     <Link to="/About"><li>About</li></Link>
                     <Link to="/Products"><li>Products</li></Link>
                     <Link to="/Account"><li>Account</li></Link>
                </ul>
            </div>
            <div className="mob" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </div>
        
    );
 }
}
export default Navbar;