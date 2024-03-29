import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

import { portfolio } from "../../data/Portfolio";

export default function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <h4>My Recent Work</h4>
        <h2>Portfolio</h2>

        {/* <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="portfolio" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn" target="_blank">
                Github
              </a>
              <a
                href="https://github.com"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="portfolio" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn" target="_blank">
                Github
              </a>
              <a
                href="https://github.com"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="portfolio" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn" target="_blank">
                Github
              </a>
              <a
                href="https://github.com"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="portfolio" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn" target="_blank">
                Github
              </a>
              <a
                href="https://github.com"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="portfolio" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn" target="_blank">
                Github
              </a>
              <a
                href="https://github.com"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="portfolio" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn" target="_blank">
                Github
              </a>
              <a
                href="https://github.com"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="portfolio" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn" target="_blank">
                Github
              </a>
              <a
                href="https://github.com"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>{" "}
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="portfolio" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className="btn" target="_blank">
                Github
              </a>
              <a
                href="https://github.com"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div> */}

        <div className="container portfolio__container">
          {portfolio.projects.map((item, index) => (
            <article className="portfolio__item" key={index}>
              <div className="portfolio__item-image">
                <img src={item.urlImage} alt="portfolio" />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.urlSourceCode} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={item.urlDemo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
