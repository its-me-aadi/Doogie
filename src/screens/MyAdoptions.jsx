import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ApplicationCard from '../components/applicationCard';

export default function Applications() {
  const [applicationsData, setApplicationsData] = useState([]);
  const [isempty, setEmpty] = useState(false);
  const emptyMessage = "Oops! Looks like you don't have any approved applications";
  async function loadData() {
    await fetch("https://doogie.onrender.com/api/adoptionsData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localStorage.getItem("userEmail")})
    }).then(async (response) => {
      response = await response.json();
      setApplicationsData(response[0]);
      if (response[0].length==0) {
        setEmpty(true);
      }
      console.log(response[0]);
    });

  }
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
    loadData();

  }, [])

  return (
    <div>
     <div style={{ display:"flex",justifyContent:"center",alignItems:"center",height:"6rem"}}>
        <h1 style={{color: "#00bc8c"}}>My Adoptions</h1>
        <lottie-player src="https://lottie.host/0fbfa453-e56c-4e65-809f-ca137668eeaa/7Np7pWbpt9.json"  background="transparent"  speed="1"  style={{width:"6rem",height:"2rem",transform:"scale(4)"}}  className='about-animation' loop autoplay></lottie-player>
      </div>
      <hr></hr>
      {isempty &&
        <div style={{ display: "flex", justifyContent: "center", height: "100%",marginTop:"200px"}}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div>
              {emptyMessage}
            </div>
            <div style={{ display: "flex", justifyContent: "center",alignItems:"center"}}>
              <button type="submit" className="btn btn-success" onClick={() => {
                navigate("/adopt");
              }}>Adopt</button>
              <lottie-player src="https://lottie.host/38c2d828-4596-4e32-8880-9addfbd4ff22/kg6pTwEcnL.json"  background="transparent"  speed="1"  style={{ width: "10rem", height: "10rem"}}  className='about-animation' loop  autoplay></lottie-player>
            </div>
          </div>
        </div>}
        <div style={{display:"flex",  flexWrap:"wrap",justifyContent:"space-evenly"}}>
      {!isempty && applicationsData.map((application, index) => {
        return (
          <div>
            <ApplicationCard key={index} dgData={application} />
          </div>
        )
      })}
      </div>
    </div>
  )
}
