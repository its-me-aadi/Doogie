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
        const response = await fetch("http://localhost:5000/api/login", {
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
    async function LoginGoogle(mail){
        const response = await fetch("http://localhost:5000/api/loginGoogleUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ email: mail})
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
            localStorage.setItem("userEmail",mail);
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
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onchange} />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/createuser" className="m-3 btn btn-danger">New User</Link>
                    <GoogleOAuthProvider clientId="974043168419-q18pohug8nlnqcfsavtvh1ctggg9g2jk.apps.googleusercontent.com" >
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                // console.log(credentialResponse)
                                const decoded = jwtDecode(credentialResponse?.credential);
                                // console.log(decoded);
                                LoginGoogle(decoded.email);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>

                </form>
            </div>
        </>)
}

export default Login;


