import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Elogo from '../../ecommerceLogo.png';
import CartWidget from '../cartWidget/cartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase';

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
        })
        setCategories(categories)
    
    }).catch((err) => {
        console.log(err)   
     });
},[])


    return (
        <nav className="navbar col-md-14 col-lg-14 col-sm-14">
            <Link to='/'><img src={Elogo} className="nav-img" alt=""></img></Link>
            <div className="mx-auto">
            {categories.map(cat => <NavLink className="categories" key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink>)}
            </div>
            <CartWidget />
        </nav>

    );
}

export default NavBar;