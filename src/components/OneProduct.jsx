import React from 'react'
import {BsCartPlus} from "react-icons/bs";
import {BsCartDash} from "react-icons/bs";


function OneProduct() {
    const stil={margin:10, borderStayle:"dotted"};
  return (
    <div className='card' style={stil}> 
      <img className='card-img-top' src="https:/picsum.photos/200" alt="Slika" />
      <div className="card-body">
        <h3 className='card-title'>Product name</h3>
        <p className="card-text">description of product</p>
      </div>
      <button className="btn"><BsCartPlus/></button>
      <button className="btn"><BsCartDash/></button>
    </div>
  )
}

export default OneProduct
