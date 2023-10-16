import React from 'react';
import { projects, projectNames, summary } from '../assets/info';
import '../styles/Work.css'

const Work = () => {  

  return (
    <div className='work'>
      {/* <Particle /> */}

      <h2>WORK</h2>
      {/* <h4 className='work-experience'></h4> */}
      <p className='date'>01/2018 – 03/2023</p>
      <p className='company'>L&T Technology Services, Bangalore</p>
      <p className='post'>Senior Engineer</p>
      <p>{ summary }
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
