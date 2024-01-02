import React from 'react';
import { projectNames, summary } from '../assets/info';
import '../styles/Work.css'
import ProjectItem from './ProjectItem';

const Work = () => {

  return (
    <div className='work'>
      {/* <Particle /> */}

      <h2>WORK</h2>
      <p className='date'>01/2018 – 03/2023</p>
      <p className='company'>L&T Technology Services, Bangalore</p>
      <p className='post'>Senior Engineer</p>
      <p>{summary}
      </p>
      <div className="project-list">
        {
          projectNames.map((project) => {
            return (
              <ProjectItem
                project={project}
              />
            )
          })
        }

      </div>
    </div >
  )
}

export default Work;
