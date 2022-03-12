import React from 'react';
import './body.css';
import About from '../body/about/index';
import Project from '../body/projects/index';
import Skill from '../body/skills/index';
import Work from '../body/work/index';
import Contact from '../body/contact/index';

function Body() {
  return (
  <div className='body'>
    <section id="about">
        <About />
    </section>
    <section id="projects">
        <Project />
    </section>
    <section id="skills">
        <Skill />
    </section>
    <section id="work">
        <Work />
    </section>
    <section id="contact">
        <Contact />
    </section>
  </div>
  );
}

export default Body;
