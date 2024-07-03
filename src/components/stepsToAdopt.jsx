import React from 'react'
import "../styles/stepsToAdopt.css"

export default function whyAdopt() {

    const steps = ["Create an account on DOOGIE","Browse and find a perfect buddy.","Submit an application to adopt him/her.", "The NGO will contact you for further details and steps.", "You can check the progress of your adoption on Doogie","You can see the accepted applications from profile."]
    return (
        <div className='stepsToAdopt'>
           <h1> Steps to Adopt</h1>
           <hr className="rvw-hr" />    {/* class declared in review section */}
        <div className='animation-textdiv'>
            <div className='stepsAdoptimgDiv'>
            <lottie-player src="https://lottie.host/cc9ce3b5-c43e-4e5d-b4a9-b093d7a86ed5/rquBdl3YvV.json"  background="transparent"  speed="1"  style={{ width: "8rem", height: "30rem"}}  className='about-animation' loop autoplay></lottie-player>
            </div>
            <div className='stepsAdopt'>
                    {steps.map(step => {
                        return (
                            <p>{step}</p>
                        )
                    })}
            </div>
            </div>
        </div>
    )
}
