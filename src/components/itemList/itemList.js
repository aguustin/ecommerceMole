//tiene que mapear el array traido de asyncmock en la maqueta traida por item.js
import Item from "../item/item";

const itemList = ({products}) => { //recibe los productos mandados por itemListContainer

    return (
        
        <ul style={{display:'block'}}>
           {products.map(prod => <Item key={prod.id} {...prod} />)} 
        </ul>
    )

    //recibe el objeto de 'products' de item, lo mapea y agrega una key
    //mapear el objeto sirve para poder mostrarlo y mostrar los datos que contienen los elementos

}

export default itemList;