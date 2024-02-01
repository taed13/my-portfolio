import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <a href="#" className="footer__logo">
          BAMBOO LEE
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experiences</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          {/* Portfolio  */}
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          {/* testimonials */}
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          {/* contact */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; BAMBOO LEE. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}
