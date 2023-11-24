import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Prod(props) {
    const {id}=useParams();

    useEffect(()=>{
        console.log("Effectation");
    });

    return(
        <div className="row">
        {props.produ.map((item)=>
            <div className="col-md-3 mb-4">
                <div className='card h-100 text-center p-4' style={{width :'13rem'}}>
                <Link to={`/article/${id}`}><img src={item.img} className="card-img-top" alt="Collection"/></Link>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price}</p>
                    </div>
                </div>      
            </div>
            )}
            
        </div>
    )
}

export default Prod;


