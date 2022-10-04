//Komponenta(funkcionalna) menija
//precica rfce
import React from "react";
import {BsCartFill} from "react-icons/bs";

function NavigationBar(){
    return(
        <div className="navBar">
            <a>My web store</a> 

            <div className="cart-items">
                <BsCartFill></BsCartFill>
                <p className="cart-num">0</p>
                </div> 
        </div>
    )

}

export default NavigationBar