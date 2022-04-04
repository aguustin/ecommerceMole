import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import '../../App.css';


const cartWidget = () => {
    
    return (
            <div className='cart'>
                <FontAwesomeIcon icon={faCartShopping} className="iconList"/><p>25</p>
            </div>
       
    )
}

export default cartWidget;