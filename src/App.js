import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import NavContext from "./components/nav/NavContext";

function App() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <>
      <NavContext.Provider value={{ activeNav, setActiveNav }}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        {/* other components */}
      </NavContext.Provider>
    </>
  );
}

export default App;
