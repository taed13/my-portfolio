import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function HeaderSocials() {
  return (
    <>
      <div className="header__socials">
        <a href="https://github.com/taed13" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.hackerrank.com/profile/taed13" target="_blank">
          <FaHackerrank />
        </a>
        <a href="https://www.linkedin.com/in/taed13/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/taed1011_/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/taed13" target="_blank">
          <FaFacebook />
        </a>
      </div>
    </>
  );
}
