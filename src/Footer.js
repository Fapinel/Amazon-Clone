import React from "react";
import "./Footer.css";
import TimelineIcon from "@material-ui/icons/Timeline";

function Footer() {
  return (
    
    <div className="footer-container">

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Get to know us</h2>
            <a href="#">Work at Amazon</a>
            <a href="#">Blog</a>
            <a href="#">About amazon</a>
            <a href="#">Sustainability</a>
            <a href="#">Investor ralations</a>
            <a href="#">Amazon devices</a>
            <a href="#">Amazon Tours</a>
          </div>
          <div class="footer-link-items">
            <h2>Earn Money with us</h2>
            <a href="#">Sell products on Amazon</a>
            <a href="#">Sell apps on Amazon</a>
            <a href="#">Affiliate program</a>
            <a href="#">Advertice your Products</a>
            <a href="#">Publish your Book on Kindle</a>
            <a href="#">Enable an Amazon Hub</a>
            <a href="#">See more Earn Money with Us</a>
          </div>
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>Amazon Payment Products</h2>
              <a href="#">Purchase with Points</a>
              <a href="#">Top up your Balance</a>
              <a href="#">Amazon Currency Converter</a>
            </div>
          </div>
          <div class="footer-link-items">
            <h2>We can help you</h2>
            <a href="#">Amazonn and COVID-19</a>
            <a href="#">Your account</a>
            <a href="#">Shipping Rates and Policies</a>
            <a href="#">Returns and Replacements</a>
            <a href="#">Manage Content and Devices</a>
            <a href="#">Amazon Assistant</a>
            <a href="#">Help</a>
          </div>
        </div>
      </div>
      <div className="nav-footer-line">
      <div className="logo">
      <img className="img"
          src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png"
        />
      </div>
      </div>
    </div>
  );
}

export default Footer;
