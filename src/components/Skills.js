import React from 'react';
import SkillItem from './SkillItem';
import { skillSet, skillTypes } from '../assets/info';

import '../styles/Skills.css'
const Skills = () => {

  return (
    <div className="skills">
      {/* <Particle /> */}
      <h2>SKILLS</h2>
      {
        skillTypes && skillTypes.map((skillType, index) => {
          return (
            <SkillItem
              skillSet={skillSet}
              skillType={skillType}
              id={index}
            />)
        })
      }
    </div>
  );
}

export default Skills;