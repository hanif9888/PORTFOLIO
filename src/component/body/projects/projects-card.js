import React from 'react';
import globe from '../../../Assets/globe.png';
import './projects-card.css';

function ProjectsCard({project}) {
  return <div className='project-card'>
      <div className="project-info">
          <label className='project-title'>{project.title}</label>
          <div className="project-links">
              {project.demo&& <a href={project.demo}>
                <div className="link-button">
                    <img src={globe} alt="" className="demo-icon"/>Demo
                </div>
               </a>}
               {project.github&& <a href={project.demo}>
                <div className="link-button">
                <i class="devicon-behance-plain"></i>Bhance
                </div>
               </a>}
          </div>
          <p>{project.info}</p>
          <div className="projects-tags">
              {project.tags.map((tag)=> {
                  return <label className='tag'>{tag}</label>
              })}
          </div>
      </div>
      <img src={project.image} alt="" className='project-photo'/>
    </div>;
}

export default ProjectsCard;
