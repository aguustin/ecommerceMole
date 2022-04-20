import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import  CartContext  from '../cartContext/cartContext';
import '../../App.css';

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)
    
    return (
            <div className='cart'>
                <FontAwesomeIcon icon={faCartShopping} className="iconList"/><p>{getQuantity()}</p>
            </div>
       
    )
}

export default CartWidget;