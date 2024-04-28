import React from "react";
import { useNavigate } from "react-router-dom";
function Card(props) {
    const navigate = useNavigate();
    function handleClick(event) {
        localStorage.setItem("dogKey", event.target.value);
        navigate("/application");
    }
    return (
        <div className="card mt-5" style={{ width: "18rem", maxHeight: "360px",marginLeft:"30px" }}>
            <img src={props.data.img} className="card-img-top" alt="..." style={{ maxHeight: "120px", objectFit: "fill" }} />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.Breed}</p>
                <p className="card-text">{props.data.location}</p>
                <hr></hr>
                <button className="btn btn-success justify-center ms-2" value={props.k} onClick={handleClick}>Adopt</button>
            </div>
        </div>
    )
}
export default Card;