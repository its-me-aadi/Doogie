import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ApplicationCard from '../components/applicationCard';

export default function Applications() {
  const [applicationsData, setApplicationsData] = useState([]);
  const [isempty, setEmpty] = useState(true);
  const emptyMessage = "Oops! Looks like you haven't submitted any applications yet";
  async function loadData() {
    await fetch("http://localhost:5000/api/applicationsData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localStorage.getItem("userEmail") })
    }).then(async (response) => {
      response = await response.json();
      setApplicationsData(response[0]);
      if (response[0].length!==0) {
        setEmpty(false);
      }
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
      <div style={{ textAlign: "center" }}>
        <h1>My Applications</h1>
        <hr></hr>
      </div>
      {isempty &&
        <div style={{ display: "flex", justifyContent: "center", height: "100%", marginTop: "200px" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div>
              {emptyMessage}
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <button type="submit" className="btn btn-success" onClick={() => {
                navigate("/");
              }}>Adopt</button>
              <lottie-player src="https://lottie.host/38c2d828-4596-4e32-8880-9addfbd4ff22/kg6pTwEcnL.json" background="transparent" speed="1" style={{ width: "10rem", height: "10rem" }} className='about-animation' loop autoplay></lottie-player>
            </div>
          </div>
        </div>}
      <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly"}}>
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
