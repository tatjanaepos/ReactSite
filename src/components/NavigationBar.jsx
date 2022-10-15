//Komponenta(funkcionalna) menija
//precica rfce
import React from "react";
import {BsCartFill} from "react-icons/bs";
import {Link} from "react-router-dom";

function NavigationBar({cartNum}){
    //const cartNum=0;
    return(
        <div className="navBar">
            <Link to="/">My Store </Link> 

            <Link to="/cart" className="cart-items">
                <BsCartFill></BsCartFill>
                <p className="cart-num">{cartNum}</p>
                </Link> 
        </div>
    )

}

export default NavigationBar