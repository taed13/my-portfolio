import React, { useContext } from "react";
import NavContext from "../nav/NavContext";

export default function CTA() {
  const { setActiveNav } = useContext(NavContext);

  return (
    <>
      <div className="cta">
        <a
          href="https://raw.githubusercontent.com/taed13/my-cv/main/CV_Le_Tien_Dat_Backend_Developer.pdf"
          download
          className="btn"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="btn btn-primary"
          onClick={() => setActiveNav("#contact")}
        >
          Let's Talk
        </a>
      </div>
    </>
  );
}
