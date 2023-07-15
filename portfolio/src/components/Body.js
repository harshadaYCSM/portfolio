import React from "react";
// import "./body.css";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Work from "./Work";

function Body() {
  return (
  <div className="body">
    <section id="about">
      <About />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="work">
      <Work />
    </section>
    {/* <section id="projects">
      <Projects />
    </section> */}
    <section id="contact">
      <Contact />
    </section>
  </div>
  );
}

export default Body;