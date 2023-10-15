import React from "react";
import "./Footer.css";

function Footer() {
  window.addEventListener("load", () => {
    const subscribeButton = document.getElementById("newsButton");
    const emailInput = document.getElementById("emailInput");
    const hiddenText = document.getElementById("hiddenButton");
    subscribeButton.addEventListener("click", () => {
      emailInput.classList.add("footer-hidden");
      subscribeButton.classList.add("footer-hidden");
      hiddenText.classList.add("footer-hidden");
    });
  });

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-section-title logo">OneWorld</h3>
          <p className="footer-section-text">
            Thank you for visiting OneWorld! OneWorld is committed to making a
            difference in the lives of those in need. With your support, we can
            continue our mission to create a better world for everyone.
            Together, we can make a lasting impact.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title" id="contactusID">Contact Us</h3>
          <ul className="footer-section-list">
            <li>
              Email:{" "}
              <a
                href="mailto:info@OneWorld.org"
                className="footer-section-link"
              >
                info@OneWorld.org
              </a>
            </li>
            <li>Phone: +123-456-7890</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Address</h3>
          <p className="footer-section-text">
            20 W 34th St., New York, NY 10001
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Follow Us</h3>
          <ul className="footer-section-list">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer-section-link"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/home"
                target="_blank"
                className="footer-section-link"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer-section-link"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Join Our Newsletter</h3>
          <p className="footer-section-text">
            Stay informed about our projects, events, and opportunities to get
            involved. Subscribe to our newsletter and be part of our mission for
            a better world.
          </p>
          <span className="footer-newsletter">
            <input
              id="emailInput"
              type="email"
              placeholder="Enter Your Email"
              required
            />
            <button id="newsButton" type="button">
              Subscribe
            </button>
          </span>
          <span id="hiddenButton" className="">Thank you for subscribing!</span>
        </div>
      </div>
      <p className="footer-copyright">
        &copy; 2023 OneWorld | Developed by Muhammed Munir, Arib Mahboob, Sazid
        Omi, Tameem Ahmed
      </p>
    </footer>
  );
}

export default Footer;
 