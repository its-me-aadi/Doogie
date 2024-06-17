import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  // const navigate=useNavigate();

  // function Logout(){
  //   localStorage.removeItem("authToken");
  //   navigate("/");
  // }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1" to="/">Doogie</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        {localStorage.getItem("authToken") &&<li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/applications">My Applications</Link>
        </li>
      }
      </ul>
      {!localStorage.getItem("authToken") ? <div className="d-flex">
          <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
          <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
      </div>
      :
      <div>
        {/* <Link className="btn bg-white text-success mx-1" to="/adoptions">My Adoptions</Link> */}
        <Link className="btn bg-white text-success mx-1" to="/user">My Account</Link>
        {/* <div className="btn bg-white text-danger mx-1" onClick={Logout}>Logout</div> */}
      </div>
      }
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
