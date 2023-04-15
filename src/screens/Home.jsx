import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Card from "../components/card";


// import Carousel from "../components/carousel";

function Home() {
    const [searchItem,setSearchItem]=useState("");
    const [foodCategory, setFoodCategory] = useState([]);
    const [foodList, setFoodList] = useState([]);

    async function loadData() {
        fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(async (response) => {
            response = await response.json();
            // console.log(response[0],response[1]);
            setFoodList(response[0]);
            setFoodCategory(response[1]);
        });


    }

    useEffect(() => {
        loadData()
    }, [])

    function SearchItem(event){
        let search=event.target.value;
        setSearchItem(search);
    }

    return (
        <div>
            <Navbar />
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                    <div className="carousel-inner" style={{ maxHeight: "500px" }}>
                        <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                            <div class="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={SearchItem} value={searchItem}/>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/300x300/?burger" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/300x300/?pastry" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/300x300/?barbeque" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
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
            </div>
            <div className="mg-3">
                {foodCategory.map(foodcat => {
                    return (
                        <div className="row mb-3">
                            <h1 className="fs-3 ms-3">{foodcat.CategoryName}</h1>
                            <hr></hr>
                            {foodList.map((foodlis, index) => {
                                return (
                                    (foodcat.CategoryName === foodlis.CategoryName && foodlis.name.toLowerCase().includes(searchItem.toLocaleLowerCase())) &&
                                    <Card key={index} id={index} image={foodlis.img} title={foodlis.name} category={foodlis.CategoryName} options={foodlis.options[0]} className="col-12 col-md-6 col-lg-3" />
                                )
                            })}
                        </div>
                    )

                })
                }

            </div>
            <Footer />
        </div>
    )
}

export default Home;