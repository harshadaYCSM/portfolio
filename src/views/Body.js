import React from "react";
import About from "../components/About";
// import Projects from "./Projects";
import Skills from "../components/Skills";
import Contact from "./Contact";
import Work from "../components/Work";
import Intro from "../components/Intro";

function Body() {
  return (
    <div className="body">
      <section id="intro">
        <Intro />
      </section>
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