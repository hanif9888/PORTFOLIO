import React from 'react';
import ProjectsCard from './projects-card';
import { ProjectData } from '../../data/projects';
import Seprator from '../../common/seprator';
import './projects.css';

function Project() {
  const data = ProjectData;
  return(
  <div className='projects'>
    <Seprator />
    <label className='section-title'>Projects</label>
     <div>
       {data.map((project)=>{
         return <ProjectsCard project={project}/>
       })}
     </div>
  </div>
  );
}

export default Project;
