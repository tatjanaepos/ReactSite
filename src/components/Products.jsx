//arrow function componenta (rafce)
import React from 'react'
import OneProduct from './OneProduct'

const Products = ({products, onAdd}) => {
  // const name="Naziv proizvoda";
  // const desc="Opis proizvoda";
  // const prod={
  //   title:"Naziv",
  //   description:"Opis proizvoda"
  // }
  
  

  return (
    <div className='all-products'>
      {products.map((prod)=>{
        return <OneProduct product={prod} key={prod.id} onAdd={onAdd} inCart={1}/>
      })}
      {/* mapiranje-izvrsva se posebno za svaki element na koji se primenjuje zadatka funkcionalnost */}
      
      {/* <OneProduct product={products[0]}/>
      <OneProduct product={products[1]}/>
      <OneProduct product={products[2]}/>
       */}
    </div>
  )
}

export default Products

