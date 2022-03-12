import React from 'react';
// import { SocialData } from '../../data/socail';
import linkedin from '../../../Assets/linkdin.png';
import twitter from '../../../Assets/twitter.png';
import behance from '../../../Assets/behance.png';
import './social.css';

function Socail() {


    return (
        <div className='social-contact'>
            <a href="https://www.linkedin.com/in/mohammad-hanif-shaikh-13283b226/" target="_blank" rel="norefrer">
                <div className="socail-icon-div">
                    <img src={linkedin} alt="" className='socail-icon' />
                </div>
            </a>
            <a href="https://www.behance.net/hanifshaikh2" target="_blank" rel="norefrer">
                <div className="socail-icon-div">
                    <img src={behance} alt="" className='socail-icon'/>
                </div>
            </a>
            <a href="https://www.behance.net/hanifshaikh2" target="_blank" rel="norefrer">
                <div className="socail-icon-div">
                    <img src={twitter} alt="" className='socail-icon' />
                </div>
            </a>
        </div>
    );
}

export default Socail;
