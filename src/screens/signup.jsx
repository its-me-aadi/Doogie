import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/loginPage.css"
// import { GoogleLogin } from '@react-oauth/google';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";

function Signup() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        location: ""
    });
    const [message, setMessage] = useState();
    const [messageClass, setMessageClass] = useState();
    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch("https://doogie.onrender.com/api/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })
        });
        const jsonData = await response.json();
        console.log(jsonData);
        if (!jsonData.success) {
            setMessage(jsonData.errors[0].msg);
            setMessageClass("errorMessage");
        }
        else {
            setMessage("User Created");
            setMessageClass("successMessage");
            navigate("/login");
        }
    }

    function onchange(event) {
        const { name, value } = event.target;
        setCredentials(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }

        })

    }
    // async function SignUpGoogle(mail,nme){
    //     console.log(nme,mail);
    //     const response = await fetch("http://localhost:5000/api/createGoogleUser", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: JSON.stringify({ name:nme, email:mail})
    //     });
    //     const jsonData = await response.json();
    //     console.log(jsonData);
    //     if (!jsonData.success) {
    //         setMessage(jsonData.errors[0].msg);
    //         setMessageClass("errorMessage");
    //     }
    //     else {
    //         setMessage("Success");
    //         setMessageClass("successMessage");
    //         localStorage.setItem("authToken", json.authToken);
    //         localStorage.setItem("userEmail", mail);
    //         console.log(localStorage.getItem("userEmail"));
    //         navigate("/");
    //     }
    // }
    useEffect(() => {
        if (localStorage.getItem("authToken"))
            navigate("/")
    }, [])
    return (
        <>
            {message && <h1 className={messageClass}>{message}</h1>}
            <div className="container-div">
                <div className="background-img-div"></div>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-image-div">
                        <img src="https://wallpapers.com/images/hd/cute-dog-1920-x-1080-background-9kqevqyf8tjf2v24.jpg" className="form-image" />
                    </div>
                    <div className="form-inputs-div">
                        <div className="form-inputs">
                            <i class="fa-regular fa-user"></i>
                            <input type="text" name="name" value={credentials.name} onChange={onchange} placeholder="USERNAME" />
                        </div>
                        <div className="form-inputs">
                            <i class="fa-regular fa-envelope"></i>
                            <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onchange} placeholder="EMAIL" />
                        </div>
                        <div className="form-inputs">
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onchange} placeholder="PASSWORD" />
                        </div>
                        <div className="form-inputs">
                            <i class="fa-solid fa-location-pin"></i>
                            <input type="text" name="location" value={credentials.location} onChange={onchange} placeholder="Location" />
                        </div>
                        <p className="new-user"><Link to="/login">Already a User</Link></p>
                        <div className="login-button">
                            <button type="submit">Register</button>
                        </div>
                    </div>
                </form>
                {/* <GoogleOAuthProvider clientId="974043168419-q18pohug8nlnqcfsavtvh1ctggg9g2jk.apps.googleusercontent.com" >
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                // console.log(credentialResponse)
                                const decoded = jwtDecode(credentialResponse?.credential);
                                // console.log(decoded.email);
                                SignUpGoogle(decoded.email,decoded.name);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider> */}
            </div>
        </>)
}
export default Signup;

