import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import img1 from "../liquor img/gin.avif";
import "./Styling.css";

const Home =() =>{
    return(
        <Wrapper>
            <div className="container">
                <div className="grid grid-two-column">
                        <div className="sec-one">
                            <h1>Welcome to Liquor Store!!!</h1><br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/>
                            <NavLink>
                                <button className="btn">Shop Now</button>
                            </NavLink>
                        </div>
                        <div className="sec-two">
                            <img src={img1} alt="liq img" height="300" width="300"/>
                        </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper= styled.section``;

export default Home;