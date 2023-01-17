import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import  CartContext  from '../../Context/cartContext/cartContext';
import '../../App.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)

    return (
        <Link  to='/cart'>
            <div className='cart'>
                <FontAwesomeIcon icon={faCartShopping} className="iconList"/><p>{getQuantity()}</p>
            </div>
       </Link>
    )
}

export default CartWidget;