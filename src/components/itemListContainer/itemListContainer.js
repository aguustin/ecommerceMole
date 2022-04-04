import { useState, useEffect } from "react";
import ItemList from "../itemList/itemList";
import { getProducts } from "../../asyncmock";


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods); //setea los productos tomados de getProducts de asyncmock dentro de products de useState
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return(
    <div>
        <h1 className="col-lg-3 mx-auto" style={{marginTop:'30px'}}>{props.greeting}</h1>
        <div className="container" style={{marginTop:'50px'}}><ItemList products={products} /></div> 
    </div>
    )
}
//en <ItemList /> itemListContainer manda los productos
export default ItemListContainer;