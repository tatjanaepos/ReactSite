import React from 'react'
import {BsCartPlus} from "react-icons/bs";
import {BsCartDash} from "react-icons/bs";

//destruktuiranje komponenata-props objekta
//razbije props na njegove delove
function OneProduct({product, onAdd, inCart}) {
    const stil={margin:10, borderStayle:"dotted"};
    //console.log(props);
  
    // function onAdd(title){
    //   console.log("Dodat proizvod: "+title);
    // }
    // function onRemove(){
    //   console.log("Izbaci proizvod");
    // }
    
  
    return (
    <div className={inCart===1 ? "card" : "card-cart"} style={stil}> 
      <img className={inCart===1 ? "card-img-top" : "card-img-left"} src="https:/picsum.photos/200" alt="Slika" />
      <div className="card-body">
        <h3 className='card-title'>{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>
      {inCart===1 ? (<>
      <button className="btn" onClick={()=>onAdd(product.title,product.id)}><BsCartPlus/></button>
      <button className="btn"><BsCartDash/></button>
      </>)
      : ( <h3>Amount: {product.amount}</h3> )}
 
    </div>
  )
}

export default OneProduct
