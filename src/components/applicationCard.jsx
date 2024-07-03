import React, { useEffect, useState } from 'react'
import '../styles/card.css'


export default function ApplicationCard(props) {

  const [fontColor, setFontColor] = useState({
    color: "whitesmoke"
  })

  useEffect(() => {
    if (props.dgData.status === "Pending")
      setFontColor({ color: "#FF8C00" })
    else if (props.dgData.status === "Failed")
      setFontColor({ color: "#ff2c2c" })
    else
      setFontColor({ color: "#028A0F" })
  }, [])

  return (
    // <div className="card mt-5" style={{ width: "18rem", maxHeight: "460px", marginBottom: "4%", marginTop: "0" }}>
    //   <img src={props.dgData.dogData.img} className="card-img-top" alt="..." style={{ height: "170px", objectFit: "fill" }} />
    //   <div className="card-body">
    //     <h5 className="card-title">{props.dgData.dogData.name}</h5>
    //     <hr></hr>
    //     <p className="card-text">Breed: {props.dgData.dogData.Breed}</p>
    //     <p className="card-text">Location: {props.dgData.dogData.location}</p>
    //     <hr></hr>
    //     <p className="card-text" >Application Status: <strong style={fontColor}>{props.dgData.status}</strong> </p>
    //   </div>
    // </div>
    <div id="card-adopt" style={{background:"rgba(220,220,220,1"}} >
            <img src={props.dgData.dogData.img} alt="Dog Image" />
            <h1>{props.dgData.dogData.name}</h1>
            <p>{props.dgData.dogData.Breed}</p>
            <div class="location">{props.dgData.dogData.location}</div>
            {/* <button >Adopt</button> */}
            <p className="card-text" >Application Status: <strong style={fontColor}>{props.dgData.status}</strong> </p>
        </div>

  )
}
