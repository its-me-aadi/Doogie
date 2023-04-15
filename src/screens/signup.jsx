import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


function Signup(){
    const navigate=useNavigate();
    const [credentials,setCredentials]=useState({
        name:"",
        email:"",
        password:"",
        location:""
    });

async function handleSubmit(event){
    event.preventDefault();
    const response=await fetch("http://localhost:5000/api/createuser",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
    });
    const jsonData=await response.json();
    console.log(jsonData);
    if(!jsonData.success){
        alert("Invalid Data");
    }
    else{
        alert("gaand marao");
        navigate("/login");
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
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name="name"  value={credentials.name} onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  value={credentials.email} onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password"  value={credentials.password} onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="location" className="form-label">Address</label>
    <input type="text" className="form-control"  name="location"  value={credentials.location} onChange={onchange}/>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
  <Link to="/login" className="m-3 btn btn-danger">Already a User</Link>
</form>
</div>
    </>)
}
export default Signup;

