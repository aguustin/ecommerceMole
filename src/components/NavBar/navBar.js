import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Elogo from '../../ecommerceLogo.png';
import CartWidget from '../cartWidget/cartWidget';
import { getCategories } from '../../asyncmock';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {getCategories().then(categories => {
        setCategories(categories)
    })
},[])

    return (
        <nav className="navbar col-md-14 col-lg-14 col-sm-14">
            <Link to='/'><img src={Elogo} className="nav-img" alt=""></img></Link>
            <div className="mx-auto">
            {categories.map(cat => <NavLink className="categories" key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink>)}
            </div>
            <button className="B-login">Login</button>
            <CartWidget />
        </nav>

    );
}

export default NavBar;