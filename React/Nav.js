import React from "react";
import banner from "../../images/movbanner.jpg";
import logo from "../../images/EMovies.png";

const navcolor = {
  backgroundColor: "wheat",
};

const mystyle = {
  color: "darkslateblue",
  fontFamily: "Aerotis",
};

function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg" style={navcolor}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo}></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" href="#" style={mystyle}>
                Home
              </a>
              <a class="nav-link" href="#">
                Movies
              </a>
              <a class="nav-link" href="#">
                About us
              </a>
              <a class="nav-link ">Contact us</a>
            </div>
          </div>
        </div>
      </nav>
      <img src={banner} className="img-fluid"></img>
    </>
  );
}

export default Nav;
