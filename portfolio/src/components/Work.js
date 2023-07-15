import React from 'react';
import '../styles/Work.css'
import Particle from "./Particle";

const Work = () => {

  return (
    <div className='work'>
          <Particle />

      <h2>WORK</h2>
      {/* <h4 className='work-experience'></h4> */}
      <p className='date'>01/2018 – 03/2023</p>
      <p className='company'>L&T Technology Services, Bangalore</p>
      <p className='post'>Senior Engineer</p>
      <p>Worked on multiple projects, ensuring exceptional user experience & optimized performance. Contributed to feature additions, UI enhancements, & bug fixing to meet
        customer demands while following the CI/CD approach. Utilized Agile software development (Scrum) methodologies for all projects.
      </p>
      <div className="project-list">
        <div className="project">
          <h3 className="project-title">Infinite SmartTV Project, Synamedia (07/2022 - 03/2023)</h3>
          <div className="project-description">            
              <p>Web app development for 5 different OTT clients’ app on a single code base.</p>
              {/* <p>Worked with DashJS Player library.</p>
              <p>Sprint planning &amp; Code review as a dev lead.</p> */}
            
          </div>
        </div>
        <div className="project">
          <h3 className="project-title">Zee5 Player &amp; Web App (03/2020 - 06/2022)</h3>
          <div className="project-description">
            
              <p>Media Player development for OTT client ZEE5’s Web app for smart TVs.</p>
              {/* <p>Worked with HLS Shaka Player libraries.</p>
              <p>Responsible for adding new player functionalities, integrating new players as per requirement or platform specifications &amp; limitations.</p>
              <p>Development of standalone player created to test player functionalities independently.</p>
              <p>Exposure to various platforms such as LG, Samsung, Sony, Vewd, Vidaa as well as smart STB devices such as Airtel, DishTV as the app was made functional on all of these.</p> */}
            
          </div>
        </div>
        <div className="project">
          <h3 className="project-title">India Today (02/2018 - 02/2020)</h3>
          <div className="project-description">
            
              <p>Media Player development for OTT client ZEE5’s Web app for smart TVs.</p>
              {/* <p>Worked with HLS Shaka Player libraries.</p>
              <p>Responsible for adding new player functionalities, integrating new players as per requirement or platform specifications &amp; limitations.</p>
              <p>Development of standalone player created to test player functionalities independently.</p>
              <p>Exposure to various platforms such as LG, Samsung, Sony, Vewd, Vidaa as well as smart STB devices such as Airtel, DishTV as the app was made functional on all of these.</p> */}
            
          </div>
        </div>
      
      
    </div> 
    </div>
  )
}

export default Work;
