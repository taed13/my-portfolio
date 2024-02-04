import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import {
  dataWeb_Development,
  dataUI_UX_Design,
  dataBackend_Development,
} from "../../data/Services";

export default function Services() {
  return (
    <>
      <section id="services">
        <h4>What I Offer</h4>
        <h2>Services</h2>

        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service__list">
              {dataUI_UX_Design.map((item, index) => (
                <li key={index}>
                  <BiCheck className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
          {/* END OF UI/UX */}

          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>

            <ul className="service__list">
              {dataWeb_Development.map((item, index) => (
                <li key={index}>
                  <BiCheck className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>

          {/* WEB DEVELOPMENT */}

          <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>

            <ul className="service__list">
              {dataBackend_Development.map((item, index) => (
                <li key={index}>
                  <BiCheck className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>

          {/* CONTENT CREATION */}
        </div>
      </section>
    </>
  );
}
