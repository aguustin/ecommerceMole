import { useState, useEffect } from "react";
import ItemList from "../itemList/itemList";
import { getProducts } from "../../asyncmock";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    
    const {categoryId} = useParams([]);

    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods); //setea los productos tomados de getProducts de asyncmock dentro de products de useState
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])
    
            return(
            <div>
                <h1 className="col-lg-3 mx-auto" style={{marginTop:'30px'}}>{props.greeting}</h1>
                <div className="container" style={{marginTop:'50px', display:'block'}}><ItemList products={products}  /></div> 
            </div>
            )
            }
  
export default ItemListContainer;