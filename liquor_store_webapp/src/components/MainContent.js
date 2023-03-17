import React from "react";
import product_card from "../data/productdata";
import "./MainContent.css"

const MainContent =() =>{
    
    const Items = product_card.map((item)=>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.productImg} height="350" width="350"/>
            </div>
            <div className="card_header">
                <h2>{item.productName}</h2>
                <p>{item.price}</p>
                <div className="btn">Add to cart</div>
            </div>
        </div>
    );
    const listItems=[];
    for(let i=0;i<6;i++){
        listItems.push(Items);
    }
    return (
            <div className="main-content">
                
                    {listItems}
               
            </div>
        
    )
}

export default MainContent;