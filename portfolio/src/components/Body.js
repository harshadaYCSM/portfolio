import React from "react";
// import "./body.css";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
// import Work from "./work/";
import Contact from "./Contact";

function Body() {
  return (
  <div className="body">
    <section id="about">
      <About />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="skills">
      <Skills />
    </section>
    {/* <section id="work">
      <Work />
    </section> */}
    <section id="contact">
      <Contact />
    </section>
  </div>
  );
}

export default Body;