import React from "react";
import "./Footer.css";

const Footer =() =>{
    return(
        <div className="footer">
            
           <div className="footer-links1">
                <h4>Links</h4>
                <a href="/">
                    <p>Home</p>
                </a>
                <a href="/About">
                    <p>About</p>
                </a>
                <a href="/Products">
                    <p>Products</p>
                </a>
                <a href="/Account">
                    <p>Account</p>
                </a>
           </div>
           <div className="footer-links2">
                <h4>Contact and Follow Us</h4>
                <a href="/Instagram">
                    <p>Instagram</p>
                </a>
                <a href="/Facebook">
                    <p>Facebook</p>
                </a>
                <a href="/Whatsapp">
                    <p>Whatsapp</p>
                </a>
                <a href="/Twitter">
                    <p>Twitter</p>
                </a>
           </div>
           
        </div>
    );
}

export default Footer;