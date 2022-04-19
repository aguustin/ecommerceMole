//tiene que mandar a itemList la maqueta para mostrar los productos
import { useState } from 'react';
//import ItemCount from '../itemCount/itemCount';
import { Link } from 'react-router-dom';
//import Item from "../item/item";

const InputCount = ({onConfirm, stock, initial=1}) => {
    const [count, setCount] = useState(initial);
    const handleChange = (e) => {
        if(e.target.value <= stock){
            setCount(e.target.value);
        }
    }

    return(
        <div>
            <input type="number" onChange={handleChange} value={count} />
            <button onClick={() => onConfirm(count)}>Add to cart</button>
        </div>
    )
}


const ButtonCount = ({onConfirm, stock, initial = 0}) => {

    const [count, setCount] = useState(initial);

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
        <button onClick={() => onConfirm(count)}>Add to cart</button> 
    </div>
)
//id="sumCart"  *va en el ultimo button
}

const ItemDetail = ({id, name, img, category, description, price, stock}) => { //recibe los productos mandados por itemListContainer
    const [typeInput, setInputType] = useState(true);
    const [quantity, setQuanqity] = useState(0);

    const handleAdd = (sum) => {
        setQuanqity(sum)
    }

    const Count = typeInput ? ButtonCount : InputCount

    return (
        <div className="item-prod col-lg-3 col-md-6 col-sm-12 card mx-auto">
            <button onClick={() => setInputType(!typeInput)}>Change Count</button>
            <h5 className="card-header">{name}</h5>
            <picture className="card-body">
                <img src={img} alt="" />
            </picture>
            <div className="item-prod-footer card-footer">
            <p>Price: {price}</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <Count onConfirm={handleAdd} stock={stock}></Count>}
        </div>
    )

    //recibe el objeto de 'products' de item, lo mapea y agrega una key
    //mapear el objeto sirve para poder mostrarlo y mostrar los datos que contienen los elementos

}

export default ItemDetail;
