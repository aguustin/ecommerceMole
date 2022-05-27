import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/cartContext/cartContext";
import { writeBatch, addDoc, collection, getDocs, query, where, documentId } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/index";

const Cart = () => {
  
    const {cart, removeItem, clearCart, getTotal} = useContext(CartContext);

    const [ names, setName ] = useState();
    const [ phone, setPhone ] = useState();
    const [ address, setAddress ] = useState(); 


    const createOrder = () => {
       
        const ObjectOrder = {
            items : cart,
            buyer : {
                names: names,
                phones: phone,
                address: address
            },
            total : getTotal(),
            date: new Date()
        }


    const ids = cart.map(prod => prod.id)
    const batch = writeBatch(firestoreDb)
    const collectionRef = collection(firestoreDb, 'products')
    const outOfStock = []

    getDocs(query(collectionRef, where(documentId(), 'in', ids)))
    .then(response => {
        response.docs.forEach( doc => {
            const dataDoc = doc.data()
            const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

            if(dataDoc.stock >= prodQuantity){
                batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc})
            }
        })
    }).then(() => {
        if(outOfStock.length === 0){
            const collectionRef = collection(firestoreDb, 'orders')
            return addDoc(collectionRef, ObjectOrder)
        }else{
            return Promise.reject(
                { name: 'outOfStockError', products: outOfStock }
            )
        }
    }).then(({id}) => {
        batch.commit()
        clearCart()
        return(
        console.log(`Orden ${id}, Name:${names}, Phone:${phone}, Adress:${address}`)
        )
    }).catch(error => {
        console.log(error)
    })
    console.log(ObjectOrder)
    }

   
    if(cart.length === 0){
        return(
            <div>
            <h1>There is no products in the cart</h1>
            <Link to='/'><h3>Back to the list</h3></Link>
            </div>
        )
    }


    return(
        <div className="onCart col-lg-12 col-md-12 col-sm-6 mx-auto">
            <ul>
                {
                 cart.map(prod => <li key={prod.id}>
                 <button id="removeItem" onClick={() =>removeItem(prod.id)}>X</button><br></br> 
                 <img src={prod.img} alt=""></img><br></br> 
                 Product name: {prod.name} <br></br> 
                 Quantity: {prod.quantity} <br></br> 
                 Price uni: {prod.price} <br></br> 
                 Subtotal: {prod.quantity * prod.price}<br></br>
                 </li>
                )
                }
            </ul>
            <div>
                    {
                   <h3>
                    Total:{getTotal()} 
                    </h3>
                    }
                     </div>
                <div className="mx-auto">
                    <form className="contactForm mx-auto">
                    <label>Name:<input className="InputContact" type="text" value={names} onChange={({target}) => setName(target.value)} /></label>
                    <label>Phone:<input className="InputContact" type="number" value={phone} onChange={({target}) => setPhone(target.value)} /></label>
                    <label>Adress:<input className="InputContact" type="text" value={address} onChange={({target}) => setAddress(target.value)} /></label>
                    </form>
                    <div className="buttonCO mx-auto" style={{display:'flex'}}>
                    <button id="clearCart" className="btn btn-danger" onClick={() => clearCart()}>Clear cart</button>
                    <button id="createOrder" className="btn btn-primary" onClick={() => createOrder()}>Create Order</button>
                    </div>
                </div>
        </div>
    )
}

export default Cart