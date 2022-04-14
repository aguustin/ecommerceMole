//tiene que mandar a itemList la maqueta para mostrar los productos

//import Item from "../item/item";

const itemDetail = ({name, img, price}) => { //recibe los productos mandados por itemListContainer
    return (
        <div className="item-prod col-lg-3 col-md-6 col-sm-12 card mx-auto">
            <h5 className="card-header">{name}</h5>
            <picture className="card-body">
                <img src={img} alt="" />
            </picture>
            <div className="item-prod-footer card-footer">
            <p>Price: {price}</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
        </div>
    )

    //recibe el objeto de 'products' de item, lo mapea y agrega una key
    //mapear el objeto sirve para poder mostrarlo y mostrar los datos que contienen los elementos

}

export default itemDetail;
