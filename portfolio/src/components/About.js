import React from 'react';
import '../styles/About.css';
// import profileImage from '../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const githubUrl = 'https://github.com/your-github-profile'; // Replace with your GitHub profile URL
  const linkedinUrl = 'https://linkedin.com/in/your-linkedin-profile'; // Replace with your LinkedIn profile URL

  return (
    <div className="about">
      <div className="profile-image">
        {/* <img src={profileImage} alt="Profile" /> */}
      </div>
      <h2>About</h2>
      <h4>SUMMARY</h4>
      <p>I am a Frontend Developer with more than 5 years of experience, expertise in JavaScript, ReactJS, HTML5, CSS,
        SASS & UI/UX design. Proficient in RESTful APIs, media player libraries, & cross-platform compatibility.</p>
      <h4 className='work-experience'>WORK EXPERIENCE</h4>
      <p className='date'>01/2018 – 03/2023</p>
      <p className='company'>L&T Technology Services, Bangalore</p>
      <p className='post'>Senior Engineer</p>
      <p>Worked on multiple projects, ensuring exceptional user experience & optimized performance. Contributed to feature additions, UI enhancements, & bug fixing to meet
        customer demands while following the CI/CD approach. Utilized Agile software development (Scrum) methodologies for all projects.</p>
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
