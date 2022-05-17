import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../cartContext/cartContext";
import { writeBatch, addDoc, collection, getDocs, query, where, documentId } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/index";

const Cart = () => {
    const {cart, removeItem, clearCart, getTotal} = useContext(CartContext);

    const createOrder = () => {
        const ObjectOrder = {
            items : cart,
            buyer : {
                name: 'Agustin Mole',
                phone: '213381291',
                email: 'agustinmole@gmail.com'
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
            return Promise.reject({ name: 'outOfStockError', products: outOfStock})
        }
    }).then(({ id}) => {
        batch.commit()
        clearCart()
        return(
        console.log(`Orden ${id}`)
        )
    }).catch(error => {
        console.log(error)
    })

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
                 cantidad: {prod.quantity} <br></br> 
                 price uni: {prod.price} <br></br> 
                 subtotal: {prod.quantity * prod.price}<br></br>
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
                    <button id="clearCart" className="btn btn-danger" onClick={() => clearCart()}>Clear cart</button>
                    <button id="createOrder" className="btn btn-primary" onClick={() => createOrder()}>Create Order</button>
                </div>
        </div>
    )
}

export default Cart