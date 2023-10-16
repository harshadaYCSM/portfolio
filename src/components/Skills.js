import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skillSet, skillIconsList, skillTypes } from '../assets/info';
import '../styles/Skills.css'
const Skills = () => {

  return (
    <div className="skills">
      {/* <Particle /> */}
      <h2>SKILLS</h2>
      <div className='skills-container'>
        {
          skillTypes && skillTypes.map((skillType, index) => {
            return (<div className='skill-section'>
              <p className='skill-title'>{skillType}</p>
              <div id={index}></div>
              <div className='skill-list'>
                {
                  skillSet && skillSet[skillType]?.map((skill) => {
                    return (
                      <div className='skill-set'>
                        <FontAwesomeIcon className="skill-icon" icon={skillIconsList[skill] || skillIconsList['default']} />
                        <p className="skill-name">{skill}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>)
          })
        }
      </div>
    </div>
  );
}

export default Skills;

