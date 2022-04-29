
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../cartContext/cartContext';
import NotificationContext from '../notifications/notifications';


const InputCount = ({onConfirm, stock, initial=1}) => {

    const [count, setCount] = useState(initial);
    
    const handleChange = (e) => {
        if(e.target.value <= stock){
            setCount(e.target.value);
        }
    }

    return(
        <div className='inputCount'>
            <input type="number" onChange={handleChange} value={count} />
            <button onClick={() => onConfirm(count)}>Add to cart</button>
        </div>
    )
}

const ButtonCount = ({onConfirm, stock, initial = 0}) => {

    const [count, setCount] = useState(initial);

const increment = () => {

     setCount(count + 1);

     if(count >= 25){
         setCount(25)
     }

}

const decrement = () => {
    
    setCount(count - 1);
    if(count <= 0){
        setCount(0)
    }
     
}

return (
    <div className='itemCount col-lg-2'>
        <div className='itemCountChild mx-auto'>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
        </div>
        <button id="addCart" onClick={() => onConfirm(count)}>Add to cart</button> 
    </div>
)
//id="sumCart"  *va en el ultimo button
}

const ItemDetail = ({id, name, img, category, description, price, stock}) => { //recibe los productos mandados por itemListContainer
    const [typeInput, setInputType] = useState(true);
    const [quantity, setQuanqity] = useState(0);
    const [ toCart, setToCart ] = useState(0);
    const { addItem /*isInCart*/ } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);

    const handleAdd = (count) => {
        setQuanqity(count)
        setToCart(count)
        const productObj = {
            id, name, price, quantity, img
        }

        addItem({...productObj, quantity: count})
        setNotification('success', `Se agregaron ${count} ${name} correctamente`)
    }

    const Count = typeInput ? ButtonCount : InputCount

    return (
        <div className="item-prod col-lg-3 col-md-6 col-sm-12 card mx-auto">
            <h5 className="card-header">{name}</h5>
            <picture className="card-body">
                <img src={img} alt="" />
            </picture>
            <div className="item-prod-footer card-footer">
            <div style={{display:'flex'}}><p>category: {category}</p><p style={{marginLeft:'110px'}}>Price: {price}</p></div>
            <p>{description}</p>
            <div style={{display:'flex'}}>
            <button id="changeAcount" onClick={() => setInputType(!typeInput)}>Change Count</button>
            { toCart > 0 ? <Link to='/cart' className='irAlCarrito'>Ir al carrito</Link> : <Count onConfirm={handleAdd} stock={stock}></Count>}
            </div>
            </div>
        </div>
    )

    //recibe el objeto de 'products' de item, lo mapea y agrega una key
    //mapear el objeto sirve para poder mostrarlo y mostrar los datos que contienen los elementos

}

export default ItemDetail;
