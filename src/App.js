//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
//import ItemCount from './components/itemCount/itemCount';
//import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



//<ItemDetailContainer />

function App() {

  /*const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} productos`)
  }*/

  //const [show, setShow] = useState(true);
 
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer />}/>
      <Route path='/item/:Id' element={<ItemDetailContainer />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

/*<button onClick={() => setShow(!show)}>{show ? 'Desmontar contador' : 'Montar contador'}</button>
{ show ? <ItemCount initial={0} stock={20} onAdd={handleOnAdd} /> : null} para montar y desmontar el contador*/ 

export default App;
/*  <header className="App-header mx-auto col-lg-3 col-md-5 col-sm-6">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/


