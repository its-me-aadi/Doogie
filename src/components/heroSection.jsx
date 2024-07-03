import React from 'react'
import { Link } from "react-router-dom";
import "../styles/heroSection.css"
export default function heroSection() {
  return (
    <div className='hero-div'>
        {/* <lottie-player src="https://lottie.host/38c2d828-4596-4e32-8880-9addfbd4ff22/kg6pTwEcnL.json"  background="transparent"  speed="1"  style={{ width: "30rem", height: "20rem"}}  className='about-animation' loop  autoplay></lottie-player> */}
        <div className='hero-img-div'></div>
        <div className='hero-content-div'>
          <h5>Dogs are not our whole life, but they make our lives whole.</h5>
          <Link className="btn bg-white text-success mx-1" to="/adopt">Adopt a Dog</Link>
        </div>
        
    </div>
  )
}
