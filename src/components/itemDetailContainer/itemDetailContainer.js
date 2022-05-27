import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";

const ItemDetailContainer = () => {

    const [product, setProducts] = useState([]);

    const {Id} = useParams();

    useEffect(() => {

        getDoc(doc(firestoreDb, 'products', Id)).then(response =>{
            const product = {id: response.id, ...response.data()}
            setProducts(product)
        }).catch((error) => {
            console.log(error)   
         })
        return(() => {
            setProducts()
        })
    }, [Id])

    return(
    <div className="itemDetailContainer">
        <h1>Item detail</h1>
            <ItemDetail {...product} /> 
    </div>
    )
}

export default ItemDetailContainer;