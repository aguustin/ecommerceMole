import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Elogo from '../../ecommerceLogo.png';
import CartWidget from '../cartWidget/cartWidget';

const navBar = () => {
    return (
        <nav className="navbar col-md-14 col-lg-14 col-sm-14">
            <img src={Elogo} className="nav-img" alt=""></img>
            <div className="mx-auto">
            <button className="nav-Buttons">Computers</button>
            <button className="nav-Buttons">Phones</button>
            <button className="nav-Buttons">Watches</button>
            </div>
            <button className="B-login">Login</button>
            <CartWidget />
        </nav>

    );
}

export default navBar;