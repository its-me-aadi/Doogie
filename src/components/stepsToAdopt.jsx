import React from 'react'
import "../styles/stepsToAdopt.css"
import { useState } from 'react'
export default function WhyAdopt() {
    const styless = {
        opacity: "1",
        color: "black",
        background: "#73CCA8"
    }
    const [verticalLine, setVerticalLine] = useState({
        button1: styless,
        button2: { background: "rgba(80,80,80,0.8)" },
        button3: { background: "rgba(80,80,80,0.8)" }
    })
    const data = [{
        title: "Steps to Adopt",
        list: ["Create an account on DOOGIE", "Browse and find a perfect buddy.", "Submit an application to adopt him/her.", "The NGO will contact you for further details and steps.", "You can check the progress of your adoption on Doogie", "You can see the accepted applications from profile."]
    },
    {
        title: "Steps to Create Account",
        list: ["Create an account on DOOGIE", "Browse and find a perfect buddy.", "Submit an application to adopt him/her.", "The NGO will contact you for further details and steps.", "You can check the progress of your adoption on Doogie", "You can see the accepted applications from profile."]
    },
    {
        title: "Steps to Check Adoption Status",
        list: ["Create an account on DOOGIE", "Browse and find a perfect buddy.", "Submit an application to adopt him/her.", "The NGO will contact you for further details and steps.", "You can check the progress of your adoption on Doogie", "You can see the accepted applications from profile."]
    }
    ]
    const [ind, setIndex] = useState(0);
    function HandleClick(event) {
        const { name } = event.target;
        if (name === 'button1') {
            setIndex(0);
            setVerticalLine({
                button1: styless,
                button2: { background: "rgba(80,80,80,0.8)" },
                button3: { background: "rgba(80,80,80,0.8)" }
            })
        }
        else if (name === 'button2') {
            setIndex(1)
            setVerticalLine({
                button1: { background: "rgba(80,80,80,0.8)" },
                button2: styless,
                button3: { background: "rgba(80,80,80,0.8)" }

            })
        }
        else {
            setIndex(2);
            setVerticalLine({
                button1: { background: "rgba(80,80,80,0.8)" },
                button2: { background: "rgba(80,80,80,0.8)" },
                button3: styless
            })
        }
    }

    return (
        <div className='section' id="steps-to-adopt">
            <div className='steps-to-adopt-heading-and-animation'>
                <div className='steps-to-adopt-heading'>
                    Steps
                </div>
                <div className='steps-to-adopt-animation'>
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_8y3kzptg.json" background="transparent" speed="1" style={{ width: "300px", height: "300px" }} loop autoplay></lottie-player>
                </div>
            </div>
            <div className='steps-to-adopt'>
                <div className='steps-to-adopt-left-section'>
                    <button name='button1' onClick={HandleClick} style={verticalLine.button1} className='steps-to-adopt-left-section-butttons'>Adoption</button>
                    <button name='button2' onClick={HandleClick} className='steps-to-adopt-left-section-butttons' style={verticalLine.button2}>Create Account</button>
                    <button name='button3' onClick={HandleClick} className='steps-to-adopt-left-section-butttons' style={verticalLine.button3}>Check Progress</button>
                </div>
                <div className='steps-to-adopt-right-section'>
                    <div className='steps-to-adopt-right-section-heading'>
                        {data[ind].title}
                    </div>
                    <div className='steps-to-adopt-right-section-list'>
                        {data[ind].list.map(listitem => {
                            return (
                                <li className='steps-to-adopt-right-section-listitems'>{listitem}</li>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
