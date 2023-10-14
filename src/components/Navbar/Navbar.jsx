import React from "react";
import "./Navbar.css";

function Navbar(){
    window.addEventListener('load', ()=> {
        const nav = document.querySelector('.nav');
        window.addEventListener('scroll', fixNav);
        function fixNav (){
            if(window.scrollY > nav.offsetHeight + 10){
                nav.classList.add('active');
            }else {
                nav.classList.remove('active');
            }
        }
    })
    
    return(
            <nav className="nav">
                <div className="container">
                    <h1 className="logo"><a href="/index.html">OneWorld</a></h1>
                    <ul>
                        <li><a href="/src/orphanDonationPage/orphan.html" className="current">Orphans</a></li>
                        <li><a href="/src/school/schoolDonation.html">Schools</a></li>
                        <li><a href="#">War-Torn Countries</a></li>
                    </ul>
                    <button className="contactus">Contact us</button>
                </div>
            </nav>
    );
}

export default Navbar;
