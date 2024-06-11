import React from "react";
import IMG1 from "../assets/p1.jpg";
import IMG2 from "../assets/p2.png";
import IMG3 from "../assets/p3.jpg";

function Carousel(props) {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
            <div className="carousel-inner" style={{ maxHeight: "500px" }}>
                <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                    <div class="d-flex justify-content-center">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.func} value={props.val} />
                    </div>
                </div>
                <div className="carousel-item active">
                    <img src={IMG1} style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={IMG2} style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={IMG3} style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;