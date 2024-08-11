import React, { useState, useEffect } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import "../styles/loginPage.css"
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Login() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState();
    const [messageClass, setMessageClass] = useState();
    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch("https://doogie.onrender.com/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const jsonData = await response.json();
        if (!jsonData.success) {
            setMessage(jsonData.errors);
            setMessageClass("errorMessage");
        }
        else {
            setMessage("Success");
            setMessageClass("successMessage");
            localStorage.setItem("authToken", json.authToken);
            localStorage.setItem("userEmail", credentials.email);
            navigate("/");
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
    async function LoginGoogle(mail) {
        const response = await fetch("https://doogie.onrender.com/api/loginGoogleUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ email: mail })
        });
        const jsonData = await response.json();
        if (!jsonData.success) {
            setMessage(jsonData.errors);
            setMessageClass("errorMessage");
        }
        else {
            setMessage("Success");
            setMessageClass("successMessage");
            localStorage.setItem("authToken", json.authToken);
            localStorage.setItem("userEmail", mail);
            navigate("/");
        }
    }
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
                        <i class="fa-regular fa-envelope"></i>
                            <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onchange} placeholder="EMAIL" />
                        </div>
                        <div className="form-inputs">
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onchange} placeholder="PASSWORD" />
                        </div>

                        <p className="new-user"><Link to="/createuser">New User</Link></p>

                        <div className="login-button">
                            <button type="submit">Login</button>
                        </div>
                        <div className="google-signin-button">
                            <GoogleOAuthProvider clientId="974043168419-q18pohug8nlnqcfsavtvh1ctggg9g2jk.apps.googleusercontent.com" >
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        const decoded = jwtDecode(credentialResponse?.credential);
                                        LoginGoogle(decoded.email);
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />
                            </GoogleOAuthProvider>
                        </div>

                    </div>
                </form>
            </div>
        </>)
}

export default Login;


