
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './components/cartContext/cartContext';
import Cart from './components/cart/cart';
import NavBar from './components/NavBar/NavBar';
import { NotificationProvider } from './components/notifications/notifications';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import SignIn from './components/signIn/signIn';
import SignUp from './components/signUp/signUp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

 
  return (
    <div className="App">
      <NotificationProvider>
      <CartContextProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer />}/>
      <Route path='/item/:Id' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;



