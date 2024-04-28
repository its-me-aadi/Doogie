import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Card from "../components/card";


// import Carousel from "../components/carousel";

function Home() {
    const [searchItem,setSearchItem]=useState("");
    const [dogsBreed, setdogsBreed] = useState([]);
    const [dogsData, setdogsData] = useState([]);

    async function loadData() {
        fetch("http://localhost:5000/api/dogsData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(async (response) => {
            response = await response.json();
            setdogsData(response[0]);
            setdogsBreed(response[1]);
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
                            <img src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/04/26/Pictures/_92672142-493d-11e8-8699-4e17514b3033.jpg" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSF4EeMCUgnjk9BDmTl_z2qZEspYXJMAzgpR6m5veMw&s" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3zPYbvyMFgRJv08JR28g82MuwRMyzIr3lZuWNfCxwg&s" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
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
                {dogsBreed.map(dogB => {
                    return (
                        (dogB.CategoryName.toLowerCase().includes(searchItem.toLocaleLowerCase()) && 
                        <div className="row mb-3">
                            <h1 className="fs-3 ms-3">{dogB.CategoryName}</h1>
                            <hr></hr>
                            {dogsData.map((dog, index) => {
                                return (
                                    (dogB.CategoryName === dog.Breed && dog.Breed.toLowerCase().includes(searchItem.toLocaleLowerCase())) &&
                                    <Card key={index}  k={index} data={dog} className="col-12 col-md-6 col-lg-3"/>
                                )
                            })}
                        </div>)
                    )

                })
                }

            </div>
            <Footer />
        </div>
    )
}

export default Home;