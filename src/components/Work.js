import React from 'react';
import '../styles/Work.css'

const Work = () => {

  const projectNames = ["Infinite SmartTV Project", "Zee5 Player &amp; Web App", "India Today"]
  const projects = {
    "Infinite SmartTV Project": {
      duration: "07/2022 - 03/2023",
      description: "Web app development for 5 different OTT clients’ app on a single code base.",
      tags: ["ReactJS", "HTML5", "CSS", "DashJS"]
    },
    "Zee5 Player &amp; Web App": {
      duration: "03/2020 - 06/2022",
      description: "Worked on development of a responsive & feature-rich web application for SmartTVs.",
      tags: ["Vanilla Javascript", "HTML5", "CSS", "SASS", "Redux"]
    },
    "India Today": {
      duration: "02/2018 - 02/2020",
      description: "Built responsive web applications for India Today & AajTak, news provider firms.",
      tags: ["Vanilla Javascript", "React", "HTML", "CSS"]
    }
  }
  return (
    <div className='work'>
      {/* <Particle /> */}

      <h2>WORK</h2>
      {/* <h4 className='work-experience'></h4> */}
      <p className='date'>01/2018 – 03/2023</p>
      <p className='company'>L&T Technology Services, Bangalore</p>
      <p className='post'>Senior Engineer</p>
      <p>Worked on multiple projects, ensuring exceptional user experience & optimized performance.
        Contributed to feature additions, UI enhancements & bug fixing to meet the customer demands.
        Utilized Agile Software Development(Scrum) methodologies for all projects.
      </p>
      <div className="project-list">
        {projectNames.map((project) => {
          return < div className="project" >
            <h3 className="project-title">{project} ({projects[project].duration})</h3>
            <div className="project-description">
              <p>{projects[project].description}</p>
            </div>
            <div className="project-tags">
              {projects[project].tags.map((tag) => {
                return <label className="tag">{tag}</label>;
              })}
            </div>
          </div>

        })}
      </div>
    </div >
  )
}

export default Work;
