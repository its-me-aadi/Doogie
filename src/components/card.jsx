import React, { useEffect, useRef, useState } from "react";
import { useCart,useDispatchCart } from "./ContextReducer";
function Card(props){
    const options=props.options;
    const sizes=Object.keys(options);
    const priceRef=useRef();
    const [quantity,setQuantity]=useState(1);
    const [size,setSize]=useState("");

    let dispatchData= useDispatchCart();
    let data=useCart();

    async function AddtoCart(){
        await dispatchData({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,image:props.foodItem.img,quantity:quantity,size:size,price:props.finalPrice});
        console.log(data);
    }
    // useEffect(()=>{
    //     setSize(priceRef.current.value);
    // },[]);

    return(
        <div className="card mt-5" style={{width: "18rem",maxHeight:"360px"}}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{maxHeight:"120px",objectFit:"fill"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">{props.foodItem.CategoryName}</p>
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-success rounded" onChange={(e)=>setQuantity(e.target.value)}>
                            {Array.from(Array(6),(e,i)=>{
                                return(
                                    <option key={i+1} value={i+1} >{i+1}</option>
                                )
                            })}
                        </select>
                        <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                            {
                                sizes.map((size,index)=>{
                                    return(
                                        <option key={index} value={size} >{size}</option>
                                    )
                                })
                            }
                        </select>
                        {/* <div className="d-inline h-100 f-5">
                        ₹{price}/
                        </div> */}
                    </div>
                    <hr></hr>
                    <button className="btn btn-success justify-center ms-2" onClick={AddtoCart}>Add to Cart</button> 
                    </div>
                </div>
    )
}
export default Card;