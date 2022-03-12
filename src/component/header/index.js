import React, { useState } from "react";
import "./header.css";
import Web from './web/index';
import Mobile from './mobile/index';
import apps from '../../Assets/apps.png';

function Header() {

  const [ isOpen, setIsOpen ] = useState(false);

  const closeMobileMenu = () => setIsOpen(false);

  return ( 
  <div className="header">
      <div className="logo">
        Portfolio
      </div>
      <div className="menu">
        <div className="web-menu">
           <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={()=> setIsOpen(!isOpen)} >
              <img src={apps} alt="" className="menu-icon"/>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} closeMobileMenu={closeMobileMenu} />}
        </div>
      </div>
  </div>
  );
}

export default Header;
