
import './App.css'; //koriscenje css za stilizovanje
import NavigationBar from './components/NavigationBar';
import Products from "./components/Products";
import {useState} from "react"; //udice

function App() {
  //definisanje promenljivih iznad return
  //u App definisu prom kako bi se koristile u svim ostalim komponentama
  //let cartNum=0;
  const [cartNum, setCartNum]=useState(0);
  const products = [
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
amount: 0,
    },
  ];

  function addProduct(title){
    console.log(title);
    setCartNum(cartNum+1);
    console.log(cartNum);
  }


  return (
    <div className="App">
      <NavigationBar cartNum={cartNum}></NavigationBar>
      <Products products={products} onAdd={addProduct}/>

    </div>
  );
}

export default App;
