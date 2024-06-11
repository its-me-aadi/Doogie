import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
import WhyAdopt from "../components/whyAdopt";
import StepsToAdopt from "../components/stepsToAdopt";
import Review from "../components/review";

function Home() {

    return (
        <div>
            <Navbar />
            <HeroSection/>
            <WhyAdopt/>
            <StepsToAdopt/>
            <Review/>
            <Footer />
            
        </div>
    )
}

export default Home;