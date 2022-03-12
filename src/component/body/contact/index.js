import React from 'react';
import Seprator from '../../common/seprator';
import Socail from '../../common/socail-contact';
import file from '../../../Assets/file.png';
import './contact.css';

function Contact() {
  return <div className="contact">
     <Seprator />
     <label className="section-title">Contact</label>
     <div className="contact-container">
        <div className="contact-left">
           <p>Want to get in touch? Contact me on any of the platform</p>
           <Socail />
        </div>
        <div className="download">
          <a download href="#">
             <img src={file} alt="" />Download Resume
          </a>
        </div>
     </div>
    </div>;
}

export default Contact;
