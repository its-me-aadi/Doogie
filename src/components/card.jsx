import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/card.css'

function Card(props) {
    const navigate = useNavigate();
    function handleClick(event) {
        console.log(event.target.value);
        localStorage.setItem("dogKey", event.target.value);
        navigate("/application");
    }
    return (
        <div id="card-adopt" >
            <img src={props.data.img} alt="Dog Image" />
            <h1>{props.data.name}</h1>
            <p>{props.data.Breed}</p>
            <div class="location">{props.data.location}</div>
            <button value={props.k} onClick={handleClick}>Adopt</button>
        </div>

    )
}
export default Card;