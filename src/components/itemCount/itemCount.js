import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { useState } from 'react';


const Count = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(0);


const increment = () => {

     setCount(count + 1);

}

const decrement = () => {
    
    setCount(count - 1);
    
}


return (
    <div className='itemCount col-lg-2'>
        <p style={{color:'black'}}>{stock}</p>
        <div className='itemCountChild mx-auto'>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
        </div>
        <button onClick={() => onAdd(count)}>Add to cart</button> 
    </div>
)
//id="sumCart"  *va en el ultimo button
}

export default Count;