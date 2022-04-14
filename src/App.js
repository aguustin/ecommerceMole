//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemCount from './components/itemCount/itemCount';
import 'bootstrap/dist/css/bootstrap.min.css';



//<ItemDetailContainer />

function App() {

 
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <ItemCount />
      <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer />}/>
      <Route path='/item/:Id' element={<ItemDetailContainer />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

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


