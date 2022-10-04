
import './App.css'; //koriscenje css za stilizovanje
import NavigationBar from './components/NavigationBar';
import Products from "./components/Products"

function App() {
  //definisanje promenljivih
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Products/>

    </div>
  );
}

export default App;
