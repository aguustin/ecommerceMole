//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './components/cartContext/cartContext';
import Cart from './components/cart/cart';
import NavBar from './components/NavBar/NavBar';
import { NotificationProvider } from './components/notifications/notifications';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
//import ItemCount from './components/itemCount/itemCount';
//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  /*const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`)
  }*/
  //const [show, setShow] = useState(true);
 // const [cart, setCart] = useState([]);
 
  return (
    <div className="App">
{/*<Context.Provider value={{cart, setCart}}>*/}
      <NotificationProvider>
      <CartContextProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer />}/>
      <Route path='/item/:Id' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      {/*</Context.Provider>*/}
      </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

/*<button onClick={() => setShow(!show)}>{show ? 'Desmontar contador' : 'Montar contador'}</button>
{ show ? <ItemCount initial={0} stock={20} onAdd={handleOnAdd} /> : null} para montar y desmontar el contador*/ 

export default App;



