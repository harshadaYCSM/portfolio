import React from 'react';
// import profileImage from '../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/About.css';

const About = () => {
  const githubUrl = 'https://github.com/harshadaYCSM'; // Replace with your GitHub profile URL
  const linkedinUrl = 'https://www.linkedin.com/in/harshada-chaudhari-3a8220b1/'; // Replace with your LinkedIn profile URL

  return (
    <div className="about">
      <div className="profile-image">
        {/* <img src={profileImage} alt="Profile" /> */}
      </div>
      <h2>ABOUT</h2>
      {/* <h4>SUMMARY</h4> */}


      {/* <p>💻 I am a Frontend Developer</p> */}
      <p>Let me introduce myself.</p>
      <p>💼 Worked in L&T Technology Services for 5+ years</p>
      <p>👩🏻‍💻 Skilled in JavaScript, HTML5, CSS3, ReactJS</p>
      <p>📺 Experience in developing OTT-Media apps</p>
      <p>⏯️ Worked with Shaka, HLS media playerlibraries</p>
      <p>🌱 I’m currently learning NodeJS & TypeScript</p>
      <p>⚡ Fun fact:I also love Playing Guitar,Crafting & Painting.😄 Do checkout my <a href='https://colorfulartspace.wordpress.com'>blog</a>.</p>
      <p>🙋🏻‍♀️ Looking for new opportunities in 📍Munich, Germany due to relocation</p>



      {/* <p>I am a Frontend Developer with more than 5 years of experience, expertise in JavaScript, ReactJS, HTML5, CSS,
        SASS & UI/UX design. Proficient in RESTful APIs, media player libraries, & cross-platform compatibility.</p> */}

      <div className="social-links">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}

export default About;
