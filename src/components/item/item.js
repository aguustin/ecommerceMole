//tiene que mandar a itemList la maqueta para mostrar los productos

import "../../App.css";

const item = ({img, name, price}) => { //manda el maquetado con variables que contiene el objeto 'products'

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
}

export default item;