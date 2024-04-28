import React from 'react'

export default function applicationCard(props) {
  return (
    <div>
         <div className="card mt-5" style={{ width: "18rem", maxHeight: "360px" }}>
            <img src={props.dgData.dogData.img} className="card-img-top" alt="..." style={{ maxHeight: "120px", objectFit: "fill" }} />
            <div className="card-body">
                <h5 className="card-title">{props.dgData.dogData.name}</h5>
                <hr></hr>
                <p className="card-text">Breed: {props.dgData.dogData.Breed}</p>
                <p className="card-text">Location: {props.dgData.dogData.location}</p>
                <hr></hr>
                <p className="card-text">Application Status: {props.dgData.status}</p>
            </div>
        </div>
        
    </div>
  )
}
