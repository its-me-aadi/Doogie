import React, { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
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
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={credentials.name} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Address</label>
                        <input type="text" className="form-control" name="location" value={credentials.location} onChange={onchange} />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/login" className="m-3 btn btn-danger">Already a User</Link>
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

