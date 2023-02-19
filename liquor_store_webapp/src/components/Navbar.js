import React from "react";
import { Link } from "react-router-dom";

const Navbar= () => {
    return(
        <div>
           <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/About"><li>About</li></Link>
                <Link to="/Products"><li>Products</li></Link>
                <Link to="/Account"><li>Account</li></Link>
           </ul>
        </div>
    );
}
export default Navbar;