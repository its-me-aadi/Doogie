import React, { useState } from "react";
import { Link,json,useNavigate } from "react-router-dom";

function Login(){
    let navigate=useNavigate();
    const [credentials,setCredentials]=useState({
        email:"",
        password:"",
    });


async function handleSubmit(event){
    event.preventDefault();
    const response=await fetch("http://localhost:5000/api/login",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body:JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const jsonData=await response.json();
    console.log(jsonData);
    if(!jsonData.success){
        alert("Invalid Data");
    }
    else{
        alert("gaand marao");
        localStorage.setItem("authToken",json.authToken);
        // console.log(localStorage.setItem("authToken"));
        navigate("/");
    }
}

function onchange(event){
    const {name,value}=event.target;
    setCredentials(prevValue=>{
        return{
            ...prevValue,
            [name]:value
        }
       
    })

}
    return (
    <>
        <div className="container">
       <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  value={credentials.email} onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password"  value={credentials.password} onChange={onchange}/>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
  <Link to="/createuser" className="m-3 btn btn-danger">New User</Link>
</form>
</div>
    </>)
}

export default Login;


