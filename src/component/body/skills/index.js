import React from 'react';
import Seprator from '../../common/seprator/index';
import { SkillsData } from '../../data/skill';
import SkillCard from './skill-card';
import './skills.css';

function Skill() {

  const data = SkillsData;

  return <div className='skills'>
    <Seprator />
    <label className='setion-title'>Skills</label>
    <div className="skills-container">
      {data.map((item)=> {
         return(
          <div className='skills-section'>
              <label className='skills-section-title'>{item.type}</label>
              <div className="skills-list">
                   {item.list.map((skill)=> {
                     return <SkillCard skill={skill}/>
                   })}
              </div>
          </div>
         )
      })}
    </div>
  </div>;
}

export default Skill;
