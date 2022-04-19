import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { useState } from 'react';


const Count = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(0);
    //const [oncar, setOnCar] = useState(0);
    //const [stock, setStock] = useState();

const increment = () => {

     setCount(count + 1);

    /* if(sum >= stock){

        setSum(stock);

     }
    
     return sumar;*/
}

const decrement = () => {
    
    setCount(count - 1);
     
    /*if(sum === initial){
    
        setSum(0);
     
    }

    return restar;*/
}


/*const onAddd = () =>{
   
   setStock(stock - sum);
   setOnCar(oncar + sum);
   setSum(0);

   if(stock <= 0){
      setStock(0);
   }

}*/

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