import React from 'react';
import './web.css';
import projects from '../../../Assets/projects.png';
import skill from '../../../Assets/skill.png';
import briefcase from '../../../Assets/briefcase.png';
import user from '../../../Assets/user.png';

function Web() {
  return (
  <div className='web'>
      <div className="web-options">
          <a href="#projects">
              <img src={projects} alt="" className='web-icons'/>Projects
          </a>
      </div>
      <div className="web-options">
          <a href="#skills">
             <img src={skill} alt="" className='web-icons'/>Skills
          </a>
      </div>
      <div className="web-options">
          <a href="#work">
              <img src={briefcase} alt="" className='web-icons'/>Work
          </a>
      </div>
      <div className="web-options">
          <a href="#contact">
          <img src={user} alt="" className='web-icons'/>Contact
          </a>
      </div>
  </div>
  );
}

export default Web;
