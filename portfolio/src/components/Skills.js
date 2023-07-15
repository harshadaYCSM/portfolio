import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faRedux, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faCode, faLaptopCode, faTerminal, faPalette, faCogs, faPaintBrush, faFileCode, faAd,
  faBug, faCodeBranch, faFileAlt, faUserFriends, faPencilAlt, faComments, faRectangleCode, faToolbox, faTvAlt, faStore, faB, faDashboard
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Skills.css'
import { faConfluence, faGit, faFigma, faNpm, faChrome, faJira, faSass, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import Particle from "./Particle";

const Skills = () => {
  const skillTypes = ['Front-end Development', 'Development Tools & Environment', 'Collaboration & Project Management', 'Smart TV Development', 'Web Analytics & Others']
  const skillsList = {
    'Front-end Development': ['HTML', 'CSS', 'Javascript', 'ES6', 'ReactJS', 'Redux', 'SASS'],
    'Development Tools & Environment': ['VS Code','REST APIs', 'NPM', 'Babel', 'Webpack','Git','Chrome'],
    // 'Web Development Tools': [],
    'Collaboration & Project Management': ['Jira',  'Confluence', 'Zeplin', 'Figma'],
    'Smart TV Development': ['LG WebOS', 'TizenOS', 'Sony SmartTV', 'Vidaa'],
    'Web Analytics & Others': ['Mixpanel', 'IMA', 'SSAI', 'DRM']
  }
  const skillIconsList = {
    'HTML': faHtml5, 'CSS': faCss3Alt, 'Javascript': faJs, 'ES6': faJsSquare, 'ReactJS': faReact, 'Redux': faStore, 'REST APIs': faTerminal, 'SASS': faSass,
    'VS Code': faCode, 'Chrome Debugger': faToolbox, 'Jira': faJira, 'Git': faGit, 'Confluence': faConfluence, 'Zeplin': faPalette, 'Figma': faFigma,
    'Chrome': faChrome, 'LG WebOS': faTvAlt, 'TizenOS': faTvAlt, 'Sony SmartTV': faTvAlt, 'Vidaa': faTvAlt,
    'NPM': faNpm, 'Babel': faB, 'Webpack': faLaptopCode, 'Mixpanel': faDashboard, 'IMA': faAd, 'SSAI': faAd, 'DRM': faFileCode, 'Deep Linking': faCogs,
    'default': faJs
  }

  return (
    <div className="skills">
          <Particle />

      <h2>SKILLS</h2>
      <div className='skills-container'>
        {
          skillTypes && skillTypes.map((skillType, index) => {
            return (<div className='skill-section'> <p className='skill-title'>{skillType}</p> <div id={index}></div><div className='skill-list'>

              {
                skillsList && skillsList[skillType]?.map((skill) => {
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
        {/* Add more icons */}
      </div>
    </div>
  );
}

export default Skills;

