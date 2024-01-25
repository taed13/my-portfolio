import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header>
        <div className="container header__container">
          <h4>Hello I'm</h4>
          <h1>Bamboo Lee</h1>
          <h4 className="text-light text__image">
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=10&pause=500&color=AA013FCC&center=true&random=false&height=15&lines=Back-end+Developer;Software+Engineer;Always+Learning+New+Things;A+Bookworm"
              alt="Typing SVG"
            />
          </h4>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#about" className="scroll__down">
            <FaAngleDoubleDown />
          </a>
        </div>
      </header>
    </>
  );
}
