import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="row">
        <div class="col">
          <img src="https://jspmrscoe.edu.in/images/rscoe.png" class="logo" />
        </div>
        <div class="col">
          <h3>
            OUR CAMPUS
            <div class="underline">
              <span></span>
            </div>
          </h3>
          <p>Tathwade Campus</p>
          <p>Hadapsar Campus</p>
          <p>Narhe Campus</p>
          <p>Wagholi Campus</p>
          <p>Bavdhan Campus</p>
          <p>Barshi Campus</p>
        </div>
        <div class="col">
          <h3>
            GET IN TOUCH
            <div class="underline">
              <span></span>
            </div>
          </h3>
          <p class="address">
            Address:Ashok Nagar, Tathawade, Pimpri-Chinchwad, Maharashtra 411033
          </p>
          <p class="email-id">Email:principal@jspmrecoe.edu.in</p>
        </div>
        <div class="col">
          <h3>
            LINKS
            <div class="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Feed</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Contacts</a>
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="social-icons">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-pinterest"></i>
          </div>
        </div>
        <div class="row">
          <hr />
          <p class="copyright">Alumni Project © 2021 - All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
