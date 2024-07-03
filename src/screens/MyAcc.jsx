import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import "../styles/MyAcc.css"
import JinWoo from "../assets/Profile Pics/JinWoo.jpg"
import Nezuko from "../assets/Profile Pics/nezuko2.jpeg"
import Asta from "../assets/Profile Pics/Asta.jpeg"
import Goku from "../assets/Profile Pics/goku.jpeg"
import Dog1 from "../assets/Profile Pics/dog1.jpg"
import Dog2 from "../assets/Profile Pics/dog2.jpg"
import Kakashi from "../assets/Profile Pics/kakashi.jpeg"
import AoiSan from "../assets/Profile Pics/aoi.jpeg"

import { useNavigate } from "react-router-dom";

export default function MyAcc() {

    const navigate = useNavigate();
    const [edit,setEdit]=useState(false);
    const [message,setMesage]=useState();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        location: "",
        dp:0
    });
    const profilePics=[JinWoo,AoiSan,Asta,Goku,Dog1,Dog2,Kakashi,Nezuko]
    const [editDp,setEditDp]=useState(false);
    function Logout() {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userEmail");
        navigate("/");
    }
    function ChangeDp(event){
        setUserData(prevValue=>{
            return{
                ...prevValue,
                dp:event.target.name
            }
        })
        setEditDp(false);
    }
    function handleChange(event){
        const {name,value}=event.target;
        console.log(name,value);
        setUserData(prevValue=>{
            return{
                ...prevValue,
                [name]:value
            }
        })
    }
    function SaveData(){
        setEdit(false);
        fetch("https://doogie.onrender.com/api/updateUserData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name:userData.name,email: userData.email,location:userData.location,dp:userData.dp})
        }).then(async (response) => {
            response = await response.json();
            if(response.success){
                setMesage("Successfully updated user details");
                setTimeout(()=>{
                    setMesage();
                },2000);
            }
            else{
                setMesage("Something went wrong!");
                setTimeout(()=>{
                    setMesage();
                },2000);
            }
        });
    }
    async function loadData() {
        fetch("https://doogie.onrender.com/api/userData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: localStorage.getItem("userEmail") })
        }).then(async (response) => {
            response = await response.json();
            setUserData(response[0][0]);
        });
    }
    useEffect(() => {
        if (!localStorage.getItem("authToken"))
            navigate("/login")
        loadData();
    }, [])

    return (
        <div>
            <Navbar />
            <div className='details-div'>
                <p style={{position:'absolute', top:'-10%'}}>{message}</p>
                <div className='profile-div'>
                    {(edit && editDp)? profilePics.map((dp,ind)=>{
                        return(
                            <img src={dp} key={ind} alt="profile-pic" className='changeDp' name={ind} onClick={ChangeDp}/>
                        )
                    }): <img src={profilePics[userData.dp]} alt="profile-pic" className='profile-pic' onClick={()=>{
                        if(edit){
                            setEditDp(true);
                        }
                    }}/> }
                    
                    {!edit && <div className='edit-button'>
                        <i class="fa-solid fa-pen" onClick={() => {
                            setEdit(true);
                        }}></i>
                    </div>}

                </div>
                {!edit && <div className='fields-div'>  
                    <input type='text' value={userData.name} disabled/>
                    <input type='text' value={userData.email} disabled />
                    <input type='text' value={userData.location} disabled />
                    <Link className="btn bg-white text-success mx-1" to="/adoptions">My Adoptions</Link>
                    <div className="btn bg-white text-danger mx-1" onClick={Logout}>Logout</div>
                </div>}
                {edit && <div className='fields-div'>  
                    <input type='text' value={userData.name} name="name" onChange={handleChange}/>
                    <input type="email" value={userData.email} disabled/>
                    <input type='text' value={userData.location} name="location" onChange={handleChange}/>
                    <div className="btn bg-white text-success mx-1" onClick={SaveData}>Save</div>
                    <Link className="btn bg-white text-success mx-1" to="/adoptions">My Adoptions</Link>
                    <div className="btn bg-white text-danger mx-1" onClick={Logout}>Logout</div>
                </div>}
                
            </div>

        </div>
    )
}
