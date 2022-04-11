//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemCount from './components/itemCount/itemCount';
import 'bootstrap/dist/css/bootstrap.min.css';



//<ItemDetailContainer />

function App() {

 
  return (
    <div className="App">
      <NavBar />
      <ItemCount />
      <ItemListContainer greeting={'Hola coders'}/>
      <ItemDetailContainer />
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


