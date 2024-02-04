import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Experience() {
  return (
    <>
      <section id="experience">
        <h4>What Skills I Have</h4>
        <h2>Experience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  {" "}
                  <h4>HTML5</h4>
                  <small className="text-light">3+ Years Working</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  {" "}
                  <h4>CSS</h4>
                  <small className="text-light">3+ Years Working</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  {" "}
                  <h4>Javascript</h4>
                  <small className="text-light">3+ Years Working</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  {" "}
                  <h4>ReactJS</h4>
                  <small className="text-light">2+ Years Learning</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  {" "}
                  <h4>Bootstrap CSS</h4>
                  <small className="text-light">3+ Years Working</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  {" "}
                  <h4>Tailwind CSS</h4>
                  <small className="text-light">1+ Years Working</small>
                </div>
              </article>
            </div>
          </div>

          {/* END OF FRONTEND */}
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  {" "}
                  <h4>NodeJS</h4>
                  <small className="text-light">2+ Years Working</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  {" "}
                  <h4>Python</h4>
                  <small className="text-light">2+ Years Working</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  {" "}
                  <h4>Databases</h4>
                  <small className="text-light">4+ Years Working</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  {" "}
                  <h4>APIs</h4>
                  <small className="text-light">2+ Years Working</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  {" "}
                  <h4>Authentication - Authorization</h4>
                  <small className="text-light">3+ Years Working</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  {" "}
                  <h4>Security Best Practices</h4>
                  <small className="text-light">2+ Years Working</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
