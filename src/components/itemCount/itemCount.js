import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { useState } from 'react';


const Count = ({initial, onAdd}) => {

    const [sum, setSum] = useState(0);
    const [oncar, setOnCar] = useState(0);
    initial = 0;
    onAdd = 0;
    const [stock, setStock] = useState(20);

const increment = (sumar) => {

     setSum(sum + 1);

     if(sum >= stock){

        setSum(stock);

     }
    
     return sumar;
}

const decrement = (restar) => {
    
    setSum(sum - 1);
     
    if(sum === initial){
    
        setSum(0);
     
    }

    return restar;
}


const onAddd = () =>{
   
   setStock(stock - sum);
   setOnCar(oncar + sum);
   setSum(0);

   if(stock <= 0){
      setStock(0);
   }

}

return (
    <div className='itemCount col-lg-2'>
        <p style={{color:'black'}}>{stock}</p>
        <div className='itemCountChild mx-auto'>
                <button onClick={decrement}>-</button>
                <p>{sum}</p>
                <button onClick={increment}>+</button>
        </div>
        <button id="sumCart" onClick={onAddd}>Add to cart</button>
    </div>
)

}

export default Count;