import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import { getProductsById } from "../../asyncmock";



const ItemDetailContainer = (props) => {

    const [product, setProducts] = useState([]);

    useEffect(() => {
        getProductsById('1').then(item => {
            setProducts(item); //setea los productos tomados de getProducts de asyncmock dentro de products de 
            console.log(item);
        }).catch(error => {
            console.log(error)
        })

        return(() => {
            setProducts()
        })
    }, [])

    return(
    <div className="itemDetailContainer">
        <h1>Item detail container (clase 6)</h1>
            <ItemDetail {...product} /> 
        
    </div>
    )
}
//en <ItemList /> itemListContainer manda los productos
export default ItemDetailContainer;