import React from "react";
import "./Navbar.css";

function Navbar() {
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", fixNav);

  function fixNav() {
    if (window.scrollY > nav.offsetHeight + 10) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  }

  return (
    <nav className="nav">
      <div className="container">
        <h1 className="logo">
          <a href="/index.html">OneWorld</a>
        </h1>
        <ul>
          <li>
            <a href="#" className="current">
              Orphans
            </a>
          </li>
          <li>
            <a href="#">Schools</a>
          </li>
          <li>
            <a href="#">War-Torn Countries</a>
          </li>
        </ul>
        <button className="contactus">Contact us</button>
      </div>
    </nav>
  );
}

export default Navbar;
