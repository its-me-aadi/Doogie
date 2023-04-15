import React from "react";

function Card(props){
    const options=props.options;
    const sizes=Object.keys(options);

    function AddtoCart(){

    }

    return(
        <div className="card mt-5" style={{width: "18rem",maxHeight:"360px"}}>
                <img src={props.image} className="card-img-top" alt="..." style={{maxHeight:"120px",objectFit:"fill"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.category}</p>
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-success rounded">
                            {Array.from(Array(6),(e,i)=>{
                                return(
                                    <option key={i+1} value={i+1}>{i+1}</option>
                                )
                            })}
                        </select>
                        <select className="m-2 h-100 bg-success rounded">
                            {
                                sizes.map((size,index)=>{
                                    return(
                                        <option key={index} value={size}>{size}</option>
                                    )
                                })
                            }
                            
                            <option key={2} value="Large">Large</option>
                        </select>
                        <div className="d-inline h-100 f-5">
                            Total Price
                        </div>
                    </div>
                    <hr></hr>
                    <button className="btn btn-success justify-center ms-2" onClick={AddtoCart}>Add to Cart</button> 
                    </div>
                </div>
    )
}
export default Card;