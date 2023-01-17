
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../Context/cartContext/cartContext';
import NotificationContext from '../notifications/notifications';


const InputCount = ({onConfirm, stock, initial=1}) => {

    const [count, setCount] = useState(initial);
    
    const handleChange = (e) => {
        if(e.target.value <= stock){
            setCount(e.target.value);
        }else{
            return(
                <div>
                    <p>Sorry we don't have more stock of this item</p>
                </div>
            )
        }
    }

    return(
        <div className='inputCount'>
            <input type="number" onChange={handleChange} value={count} />
            <button onClick={() => onConfirm(count)}>Add to cart</button>
        </div>
    )
}

const ButtonCount = ({onConfirm, initial = 1}) => {

    const [count, setCount] = useState(initial);

const increment = () => {

     setCount(count + 1);

     if(count >= 25){
         setCount(25)
     }

}

const decrement = () => {
    
    setCount(count - 1);
    if(count <= 1){
        setCount(1)
    }
     
}

return (
    <div className='itemCount col-lg-2'>
        <div className='itemCountChild mx-auto'>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
        </div>
        <button id="addCart" onClick={() => onConfirm(count)}><span>Add to cart</span></button> 
    </div>
)

}

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [ typeInput, setInputType ] = useState(true);
    const [ quantity, setQuanqity ] = useState(0);
    const [ toCart, setToCart ] = useState(0);
    const { addItem, getTotal} = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);

    const handleAdd = (count) => {
        setQuanqity(count)
        setToCart(count)
        const total = getTotal()
        const productObj = {
            id, name, price, quantity, img, total
        }

    addItem({...productObj, quantity: count, total})
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
            <div className="mx-auto" style={{display:'flex'}}>
            <p style={{margin:'auto'}}>Category: {category}</p>
            <p style={{margin:'auto'}}>Price: {price}</p>
            <p style={{margin:'auto'}}>Stock: {stock}</p>
            </div>
            <p style={{marginTop:'10px'}}>{description}</p>
            <div className="changeGoToCart" style={{display:'flex'}}>
            <button id="changeAcount" onClick={() => setInputType(!typeInput)}>Change Count</button>
            { toCart > 0 ? <Link to='/cart' className='irAlCarrito'>Ir al carrito</Link> : <Count onConfirm={handleAdd} stock={stock}></Count>}
            </div>
            </div>
        </div>
    )


}

export default ItemDetail;
