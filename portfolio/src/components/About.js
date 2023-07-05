import React from 'react';
import '../styles/About.css'

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>I am a Frontend Developer with more than 5 years of experience, expertise in JavaScript, ReactJS, HTML5, CSS,
SASS & UI/UX design. Proficient in RESTful APIs, media player libraries, & cross-platform compatibilit</p>
      <ul className="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        {/* Add more skills */}
      </ul>
    </div>
  );
}

export default About;

