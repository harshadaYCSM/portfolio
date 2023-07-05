import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faRedux } from '@fortawesome/free-brands-svg-icons';
import {
  faCode, faLaptopCode, faTerminal, faPalette, faCogs, faPaintBrush, faFileCode, faAd,
  faBug, faCodeBranch, faFileAlt, faUserFriends, faPencilAlt, faComments, faRectangleCode, faToolbox, faTvAlt, faStore, faB, faDashboard
} from '@fortawesome/free-solid-svg-icons'; 
import '../styles/Skills.css'
import { faConfluence, faGit, faFigma, faNpm, faChrome,faJira,faSass,faJsSquare} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const skillTypes = ['Programming', 'Tools', 'Platforms', 'Miscellaneous']
  const skillsList = {
    Programming: ['HTML', 'CSS', 'Javascript', 'ES6', 'ReactJS', 'Redux', 'REST APIs', 'SASS'],
    Tools: ['Visual Studio Code', 'Chrome Debugger', 'Jira', 'Git', 'Confluence', 'Zeplin', 'Figma'],
    Platforms: ['Chrome', 'LG WebOS', 'Samsung TizenOS', 'Sony Smart TV', 'Vidaa'],
    Miscellaneous: ['NPM', 'Babel', 'Webpack', 'Mixpanel', 'IMA', 'SSAI', 'DRM', 'Deep Linking']
  }
  const skillIconsList = {
    'HTML': faHtml5, 'CSS': faCss3Alt, 'Javascript': faJs, 'ES6': faJsSquare, 'ReactJS': faReact, 'Redux': faStore, 'REST APIs': faTerminal, 'SASS': faSass,
    'Visual Studio Code': faCode, 'Chrome Debugger': faToolbox, 'Jira': faJira, 'Git':faGit, 'Confluence':faConfluence, 'Zeplin': faPalette, 'Figma':faFigma,
    'Chrome': faChrome, 'LG WebOS': faTvAlt, 'Samsung TizenOS': faTvAlt, 'Sony Smart TV': faTvAlt, 'Vidaa': faTvAlt,
    'NPM':faNpm, 'Babel': faB, 'Webpack': faLaptopCode, 'Mixpanel': faDashboard, 'IMA' : faAd, 'SSAI': faAd, 'DRM': faFileCode, 'Deep Linking': faCogs,
    'default' : faJs
  }

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className='skills-container'>

        {
          skillTypes && skillTypes.map((skillType, index) => {
            return (<div className='skill-section'> <p className='skill-title'>{skillType}</p> <div id={index}></div>

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
            </div>)
          })
        }
        {/* Add more icons */}
      </div>
    </div>
  );
}

export default Skills;

