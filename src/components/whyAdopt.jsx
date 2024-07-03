import React from 'react'
import Adopt from "../assets/adoptMe.png"
import "../styles/whyAdopt.css"


export default function whyAdopt() {
    const reasons = ["Dogs are not just pets, they are family members.", "A dog is the only thing on earth that loves you more than he loves himself.","Dogs are a reminder that life is precious and fleeting, and that we should make the most of every moment we have with them.", "Many people buy pets but aren't capable of taking proper care of them so they abandon them,you can give these abandoned dogs a good life."]
    return (
        <div className='whyAdopt'>
           <h1> Why Adopt?</h1>
           <hr className="rvw-hr" />    {/* class declared in review section */}
        <div className='img-textdiv'>
            <div className='AdoptMeimgDiv'>
                <img src={Adopt} alt="adopt me" className='adoptMeimg'/>
            </div>
            <div className='reasons'>
                    {reasons.map(reason => {
                        return (
                            <p>{reason}</p>
                        )
                    })}
            </div>
            </div>
        </div>
    )
}
