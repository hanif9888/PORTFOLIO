import React from 'react';
import './about.css';
import Socail from '../../common/socail-contact';
import coding from '../../../Assets/coding.png';

function About() {
  return( 
  <div className='about'>
    <div className='about-top'>
      <div className='about-info'>
          Hello There,
          <br />My name is <span className="info-name">Hanif</span>
          <br />UI/UX Designer, Front End Devloper
      </div>
      <div className='about-photo'>
          <img src={coding} alt="" className='picture'/>
      </div>
    </div>
    <Socail />
  </div>
  );
}

export default About;
