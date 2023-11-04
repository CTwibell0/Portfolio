import React from 'react';
import { Link, Router } from 'react-router-dom';
import './style sheets/portfolio.css';
import SnaPayLogo from '../SnaPay.png'
import StudifyLogo from '../Studify_img.png'
const Portfolio = () => {
  return (
    <div className='portfolioPageTitle'>
      <h1>This is my Portfolio</h1>
      <div className='portfolioLink'>
        <Link to='https://github.com/oslabs-beta/safeql'>
          <img src='https://user-images.githubusercontent.com/13594226/217419886-519bdb8e-3720-4302-a9b8-9854fe90d576.png' className='projectLink' alt='SafeQL'/>
        </Link>
        <Link to='https://github.com/dragonite8/dragonpay'>
          <img src={SnaPayLogo} className='projectLink' alt='SnaPay'/>
        </Link>
        <Link to='https://github.com/CTwibell0'>
          <img src={StudifyLogo} className='projectLink' alt='Studify'/>
        </Link>
      </div>
    </div>
  );
};
  
export default Portfolio;