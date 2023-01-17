
import Item from "../item/item";

const ItemList = ({products}) => { 

    return (
        
        <ul style={{display:'block'}}>
           {products.map(prod => <Item key={prod.id} {...prod} />)} 
        </ul>
    )

}

export default ItemList;