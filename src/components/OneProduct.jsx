import React from 'react'
import {BsCartPlus} from "react-icons/bs";
import {BsCartDash} from "react-icons/bs";

//destruktuiranje komponenata-props objekta
//razbije props na njegove delove
function OneProduct({product, onAdd}) {
    const stil={margin:10, borderStayle:"dotted"};
    //console.log(props);
  
    // function onAdd(title){
    //   console.log("Dodat proizvod: "+title);
    // }
    // function onRemove(){
    //   console.log("Izbaci proizvod");
    // }
    
  
    return (
    <div className='card' style={stil}> 
      <img className='card-img-top' src="https:/picsum.photos/200" alt="Slika" />
      <div className="card-body">
        <h3 className='card-title'>{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>
      <button className="btn" onClick={()=>onAdd(product.title)}><BsCartPlus/></button>
      <button className="btn"><BsCartDash/></button>
    </div>
  )
}

export default OneProduct
