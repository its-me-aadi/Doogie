import React from 'react'
import "../styles/whyAdopt.css"

export default function whyAdopt() {

    const reasons = ["submit application on Doogie", "the NGO will contact you for further details and steps", "You can check the progress of your adoption on Doogie"]
    return (
        <div className='whyAdopt'>
           <h1> Steps to Adopt</h1>
           <hr className="rvw-hr" />    {/* class declared in review section */}
        <div className='img-textdiv'>
            <div className='AdoptMeimgDiv'>
            <lottie-player src="https://lottie.host/cc9ce3b5-c43e-4e5d-b4a9-b093d7a86ed5/rquBdl3YvV.json"  background="transparent"  speed="1"  style={{ width: "8rem", height: "30rem"}}  className='about-animation' loop autoplay></lottie-player>
            </div>
            <div className='reasons'>
                    {reasons.map(reason => {
                        console.log(reason);
                        return (
                            <p>{reason}</p>
                        )
                    })}
            </div>
            </div>
        </div>
    )
}
