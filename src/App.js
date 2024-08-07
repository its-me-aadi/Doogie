import React from "react";
import Home from "./screens/Home";
import Signup from "./screens/signup";
import Login from "./screens/Login";
import Applications from "./screens/MyApplications.jsx";
import Adoptions from "./screens/MyAdoptions.jsx";
import ApplicationForm from "./screens/applicationForm.jsx";
import AdoptionPage from "./screens/AdoptionPage.jsx";
import MyAcc from "./screens/MyAcc.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import './styles/app.css'

function App() {
  return (
    <Router>
       <div style={{overflow:"hidden"}}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/createuser" element={<Signup />}/>
          <Route path="/applications" element={<Applications />}/>
          <Route path="/adoptions" element={<Adoptions />}/>
          <Route path="/application" element={<ApplicationForm/>}/>
          <Route path="/adopt" element={<AdoptionPage/>}/>
          <Route path="/user" element={<MyAcc/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
