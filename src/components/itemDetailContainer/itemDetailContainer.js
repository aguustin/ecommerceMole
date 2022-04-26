import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail";
//import { getProductsById} from "../../asyncmock";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";

const ItemDetailContainer = (props) => {

    const [product, setProducts] = useState([]);

    const {Id} = useParams();

    useEffect(() => {
        /*getProductsById(Id).then(item => {
            setProducts(item); //setea los productos tomados de getProducts de asyncmock dentro de products de 
        }).catch(error => {
            console.log(error)
        })*/
        getDoc(doc(firestoreDb, 'products', Id)).then(response =>{
            const product = {id: response.id, ...response.data()}
            setProducts(product)
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
//en <ItemList /> itemListContainer manda los productos
export default ItemDetailContainer;