import React, { useEffect, useState } from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import axios from "axios";

export default function About() {
  const [totalProjects, setTotalProjects] = useState(0);

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
        <h5>Get To Know</h5>
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
                <small>3+ Years Working</small>
              </article>

              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>{totalProjects}+ Completed</small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              consequatur cupiditate laborum, suscipit dolorem voluptatibus vero
              assumenda, harum quam voluptas veritatis corporis hic totam
              dolorum quod est incidunt! Optio, nemo?
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
