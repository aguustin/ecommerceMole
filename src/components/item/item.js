
import {Link} from 'react-router-dom';


const Item = ({id, name, img, category, description, price}) => {

    return (
        
        <div className="item-prod col-lg-3 col-md-6 col-sm-12 card mx-auto" style={{margin:'5px', display:'inline-flex'}}>
            <h5 className="card-header">{name}</h5>
            <picture className="card-body">
                <img src={img} alt="" />
            </picture>
            <div className="item-prod-footer card-footer">
            <div style={{display:'flex'}}><p>category: {category}</p><p style={{marginLeft:'60px'}}>Price: {price}</p></div>
            <p>{description}</p>
                <Link  className="seeDetails" to={`/item/${id}`}><button>See details</button></Link>
            </div>
        </div>
    )
}

export default Item;