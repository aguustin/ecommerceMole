import { useState, useEffect } from "react";
import ItemList from "../itemList/itemList";
import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";
import { useParams } from "react-router-dom";
import  Loading  from "../loader/loader";


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);
    
    const {categoryId} = useParams([]);
    
    const collectionRef = categoryId
    ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
    : collection(firestoreDb, 'products')

    useEffect(() => {
        getDocs(collectionRef).then(response => {

            const products = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            }) 
            setProducts(products);
        }).catch((error) => {
            console.log(error)   
         })
    }, [categoryId])

        if(products.length === 0){
            return(
            <Loading></Loading>
            )
        }
            return(
            <div>
                <h1 className="col-lg-3 mx-auto" style={{marginTop:'30px'}}>{props.greeting}</h1>
                <div className="container" style={{marginTop:'50px', display:'block'}}><ItemList products={products} /></div> 
            </div>
            )
            }
  
export default ItemListContainer;