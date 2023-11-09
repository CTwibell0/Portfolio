import React, { useEffect, useState } from 'react';
import './index.css';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

  
const Navbar = () => {


  useEffect(() => {

    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
  });

  Events.scrollEvent.register('end', (to, element) => {
    console.log('end', to, element);
  });

  scrollSpy.update();

  return () => {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  };

  }, [])

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <>
      <div className='NavMenu'>
      <h1 className='NavTitle'>Collin Twibell</h1>

      <div className='NavSections'>
        <Link
          to="aboutPageTitle" 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          onSetActive={handleSetActive}
          >
            About
          </Link>
        <Link
          to="portfolioPageTitle" 
          spy={true} 
          smooth={true} 
          offset={10} 
          duration={500} 
          onSetActive={handleSetActive}
        >Portfolio</Link>
        <Link
          to="skillsPageTitle" 
          spy={true} 
          smooth={true} 
          offset={10} 
          duration={500} 
          onSetActive={handleSetActive}
          >Skills
        </Link>
        <Link
          to="contactPageTitle" 
          spy={true} 
          smooth={true} 
          offset={10} 
          duration={500} 
          onSetActive={handleSetActive}
          >Contact
        </Link>
      </div>
      </div>
    </>
  );
};
  
export default Navbar;