import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/form.css"


export default function ApplicationForm() {
    const navigate = useNavigate();
    const [doggieKey, setDoogiekey] = useState();
    const [dogsData, setdogsData] = useState();
    async function loadData() {
        fetch("http://localhost:5000/api/dogsData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(async (response) => {
            response = await response.json();
            setdogsData(response[0]);
        });
    }
    useEffect(() => {
        if (!localStorage.getItem("authToken")) {
            navigate("/login");
        }
        loadData();
        setDoogiekey(localStorage.getItem("dogKey"));
    }, [])
    const [credentials, setCredentials] = useState({
        name: "",
        phoneNum: "",
        address: "",
        email: ""
    });
    function change(event) {
        const { name, value } = event.target;
        setCredentials(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    const [validFlag, setValidFlag] = useState(true);
    const [invalidMessage, setInvalidMessage] = useState("");

    async function HandleClick(event) {
        event.preventDefault();
        if (credentials.name.length < 3) {
            setInvalidMessage("Please enter a proper name");
            setValidFlag(false);
        }
        else if (credentials.phoneNum.length !==10) {
            setInvalidMessage("Please enter a valid phone number");
            setValidFlag(false);
        }
        else if (credentials.address.length < 20) {
            setInvalidMessage("Please enter a valid address");
            setValidFlag(false);
        }
        else {
            const response = await fetch("http://localhost:5000/api/saveFormData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: credentials.name, email: credentials.email, phoneNum: credentials.phoneNum, location: credentials.address,dogData:dogsData[doggieKey] })
            });
            const jsonData=await response.json();
            if(!jsonData.success){
                alert("Invalid Data");
            }
            else{
                alert("Success");
                navigate("/applications");
            }
        }
    }
    return (
        <div className='main-div'>
            <div className='credentials-div'>
                <div>
                    {!validFlag && <p style={{ color: "red" }}>{invalidMessage}</p>}
                    <h2>Details</h2>
                </div>
                <div>
                    <p>Name</p>
                    <input type='text' name="name" value={credentials.name} onChange={change} placeholder='Person adopting the dog' required />
                </div>
                <div>
                    <p>Email</p>
                    <input type='email' name="email" value={credentials.email} onChange={change} placeholder='Person adopting the dog' required />
                </div>
                <div>
                    <p>Contact Number</p>
                    <input type='number' name="phoneNum" value={credentials.phoneNum} onChange={change} minLength={10} maxLength={10} required placeholder='10 digit mobile number' />
                </div>
                <div>
                    <p>Address</p>
                    <textarea rows={3} name="address" cols={22} value={credentials.address} onChange={change} required />
                </div>
                <div>
                    <button type="submit" className="btn btn-success" onClick={HandleClick}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
