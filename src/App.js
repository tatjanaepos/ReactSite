
import './App.css'; //koriscenje css za stilizovanje
import NavigationBar from './components/NavigationBar';
import Products from "./components/Products";
import {useState} from "react"; //udice,omogucava cuvanje promena
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  //definisanje promenljivih iznad return
  //u App definisu prom kako bi se koristile u svim ostalim komponentama
  //let cartNum=0;
  const [cartNum, setCartNum]=useState(0);
  const [cartProducts, setCartProducts]=useState([]);
  const [products] = useState([
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
  ]);

  function refreshCart(){
    let newProducts = products.filter((prod)=>prod.amount>0);
    setCartProducts(newProducts);
  }
  function addProduct(title,id){
    console.log("Dodat proizvod "+title);
    setCartNum(cartNum+1);
    //console.log(cartNum);
    //forEach,umesto map,ne trazi povratnu vrednost
    products.forEach((prod) => {
      if(prod.id===id){
        prod.amount++;
      }
      console.log(prod.amount);
    });
    refreshCart();


  }


  return (
    <BrowserRouter className="App">
      <NavigationBar cartNum={cartNum}></NavigationBar>
      <Routes>
        <Route path="/" element={<Products products={products} onAdd={addProduct}/>}>

        </Route>
        <Route path="/cart" element={<Cart products={cartProducts} />}/>

      </Routes>
    </BrowserRouter> //omogucava da pravimo razlicite rute
  );
}

export default App;
