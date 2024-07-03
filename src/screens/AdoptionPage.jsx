import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import DogCardsSection from "../components/dogCardsSection";
import { useNavigate } from 'react-router-dom'


export default function AdoptionPage() {
    const [searchItem, setSearchItem] = useState("");
    const [dogsBreed, setdogsBreed] = useState([]);
    const [dogsData, setdogsData] = useState([]);

    async function loadData() {
        fetch("https://doogie.onrender.com/api/dogsData", {
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
    const navigate = useNavigate();

    useEffect(() => {
        loadData();
        if (!localStorage.getItem("authToken")) {
            navigate("/login");
          }
          loadData();
    }, [])

    function SearchItem(event) {
        let search = event.target.value;
        setSearchItem(search);
    }
  return (
    <div>
         <div>
            <Navbar />
            <div>
                <Carousel val={searchItem} func={SearchItem} />
            </div>
            <DogCardsSection searchItem={searchItem} dogsBreed={dogsBreed} dogsData={dogsData} />
            <Footer />
        </div>
    </div>
  )
}
