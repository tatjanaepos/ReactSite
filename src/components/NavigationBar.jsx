//Komponenta(funkcionalna) menija
//precica rfce
import React from "react";
import {BsCartFill} from "react-icons/bs";

function NavigationBar({cartNum}){
    //const cartNum=0;
    return(
        <div className="navBar">
            <a>My Store </a> 

            <div className="cart-items">
                <BsCartFill></BsCartFill>
                <p className="cart-num">{cartNum}</p>
                </div> 
        </div>
    )

}

export default NavigationBar