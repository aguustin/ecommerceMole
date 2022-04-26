import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../cartContext/cartContext";

const Cart = () => {

    const {cart, removeItem} = useContext(CartContext);

    if(cart.length === 0){
        return(
            <div>
            <h1>There is no products in the cart</h1>
            <Link to='/'>Volver a la lista</Link>
            </div>
        )
    }

    return(
        <div className="onCart col-lg-4 col-md-4 col-sm-12 mx-auto">
            <h1>On Cart</h1>
            <ul>
                {
                 cart.map(prod => <li key={prod.id}>
                 <button onClick={() =>removeItem(prod.id)}>X</button><br></br> 
                 <img src={prod.img} alt=""></img><br></br> 
                 Product name: {prod.name} <br></br> 
                 cantidad: {prod.quantity} <br></br> 
                 price uni: {prod.price} <br></br> 
                 subtotal: {prod.quantity * prod.price}<br></br>
                 </li>)
                }
            </ul>
        </div>
    )
}

export default Cart