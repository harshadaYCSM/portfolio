import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      <ul className="project-list">
        <li className="project">
          <h3 className="project-title">Infinite SmartTV Project, Synamedia (07/2022 - 03/2023)</h3>
          <div className="project-description">
            <p className='team-size'>Team Size: 10</p>
            <ul>
              <li>Web app development for 5 different OTT clients’ app on a single code base.</li>
              <li>Worked with DashJS Player library.</li>
              <li>Sprint planning &amp; Code review as a dev lead.</li>
            </ul>
          </div>
        </li>
        <li className="project">
          <h3 className="project-title">Zee5 Player &amp; Web App (03/2020 - 06/2022)</h3>
          <div className="project-description">
            <p className='team-size'>Team Size: 14</p>
            <ul>
              <li>Media Player development for OTT client ZEE5’s Web app for smart TVs.</li>
              <li>Worked with HLS Shaka Player libraries.</li>
              <li>Responsible for adding new player functionalities, integrating new players as per requirement or platform specifications &amp; limitations.</li>
              <li>Development of standalone player created to test player functionalities independently.</li>
              <li>Exposure to various platforms such as LG, Samsung, Sony, Vewd, Vidaa as well as smart STB devices such as Airtel, DishTV as the app was made functional on all of these.</li>
            </ul>
          </div>
        </li>
        <li className="project">
          <h3 className="project-title">India Today (02/2018 - 02/2020)</h3>
          <div className="project-description">
            <p className='team-size'>Team Size: 8</p>
            <ul>
              <li>Media Player development for OTT client ZEE5’s Web app for smart TVs.</li>
              <li>Worked with HLS Shaka Player libraries.</li>
              <li>Responsible for adding new player functionalities, integrating new players as per requirement or platform specifications &amp; limitations.</li>
              <li>Development of standalone player created to test player functionalities independently.</li>
              <li>Exposure to various platforms such as LG, Samsung, Sony, Vewd, Vidaa as well as smart STB devices such as Airtel, DishTV as the app was made functional on all of these.</li>
            </ul>
          </div>
        </li>
        {/* Add more projects */}
      </ul>
    </div>
  );
};

export default Projects;
