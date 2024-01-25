import React, { useEffect, useState } from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import axios from "axios";
import { useContext } from "react";
import NavContext from "../nav/NavContext";
import { FaUniversity } from "react-icons/fa";

export default function About() {
  const [totalProjects, setTotalProjects] = useState(0);
  const { setActiveNav } = useContext(NavContext);

  useEffect(() => {
    async function getTotalProjects() {
      try {
        const response = await axios.get("https://api.github.com/users/taed13");
        setTotalProjects(response.data.public_repos);
      } catch (error) {
        console.error(error);
      }
    }

    getTotalProjects();
  }, []);

  return (
    <>
      <section id="about">
        <h4>Get To Know</h4>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>

              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>Viet Nam</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>{totalProjects}+ Completed</small>
              </article>

              <article className="about__card">
                <FaUniversity className="about__icon" />
                <h5>Education</h5>
                <small>Bachelor Degree</small>
              </article>
            </div>

            <p className="justified-text">
              I'm Tien Dat, a software engineer based in Viet Nam. I have a
              passion for software development and love to create for web and
              backend development. I have been working as a software engineer
              for 2+ years.
            </p>

            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => setActiveNav("#contact")}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
