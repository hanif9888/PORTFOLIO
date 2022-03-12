import React from 'react';
import './mobile.css';
import cross from '../../../Assets/cross.png';
import projects from '../../../Assets/projects.png';
import skill from '../../../Assets/skill.png';
import briefcase from '../../../Assets/briefcase.png';
import user from '../../../Assets/user.png';

function Mobile({ isOpen, setIsOpen, closeMobileMenu}) {
    return (
        <div className='mobile'>
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <img src={cross} alt="" />
            </div>
            <div className="mobile-options">
                <div className="mobile-option" onClick={closeMobileMenu}>
                    <a href="#projects">
                        <img src={projects} alt="" className='web-icons' />Projects
                    </a>
                </div>
                <div className="mobile-option" onClick={closeMobileMenu}>
                    <a href="#skills">
                        <img src={skill} alt="" className='web-icons' />Skills
                    </a>
                </div>
                <div className="mobile-option" onClick={closeMobileMenu}>
                    <a href="#work">
                        <img src={briefcase} alt="" className='web-icons' />Work
                    </a>
                </div>
                <div className="mobile-option" onClick={closeMobileMenu}>
                    <a href="#contact">
                        <img src={user} alt="" className='web-icons' />Contact
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Mobile;
