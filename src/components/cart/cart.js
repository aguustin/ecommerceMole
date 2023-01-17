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
    const [ showOrder, setShowOrder ] = useState(false);
    const [ noInfo, setNoInfo ] = useState(false);
   
    const createOrder = () => {

        if(names == null || phone == null || address == null){

           setNoInfo(true);

        }else{
       
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
    }).then(() => {
        batch.commit();
        clearCart();
        setTimeout(() => {
            setShowOrder(false);
        }, 5000)
    }).catch(error => {
        console.log(error)
    })
    console.log(ObjectOrder)
    }
}

    const NoInformation = () => {
        return(
        <div className="noInformation mx-auto">
            <p>Please enter your information. it's seems you not complete all the fields</p>
        </div>
        )
    }

    const CreatedOrder = () => {
        return(
            <div className="orderCreated">
                <p>Order created with succes! Name: {names}, Adress: {address}</p>
            </div>
        )
    }

   
    if(cart.length === 0){
        return(
            <div className="noProducts">
            {showOrder ? <CreatedOrder/> : null }
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
                    <button id="createOrder" className="btn btn-primary" onClick={() => createOrder(setShowOrder(true))}>Create Order</button>
                    </div>
                    {noInfo ? <NoInformation /> : null}
                </div>
           
        </div>
    )
}

export default Cart