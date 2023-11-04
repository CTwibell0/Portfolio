import React from 'react';
import './style sheets/Skills.css';


import ReactLogo from '../react-1-logo-png-transparent.png';
import JSLogo from '../Unofficial_JavaScript_logo_2.svg.png';
import CSSLogo from '../CSS.3.svg.png'
import HTMLLogo from '../HTMLLOGO.png'
import ExpressLogo from '../express-js.png'
import GraphQlLogo from '../GraphQlLogo.png'
import GitLogo from '../Git-Icon-1788C.png'
import CLogo from '../ISO_C++_Logo.svg.png'
import NextLogo from '../Nextjs-logo.svg.png'
const Skills = () => {
  
  return (
    <div className='skillsPageTitle'>
      <h1>This is the skill section</h1>
      <div className='SkillSection'>
        <img src={JSLogo} className='skills' alt='JS'/>
        <img src={ReactLogo} className='skills' alt='React'/>
        <img src={CSSLogo} className='skills' alt='CSS'/>
        <img src={HTMLLogo} className='skills' alt='HTML'/>
        <img src={ExpressLogo} className='skills' alt='Express'/>
        <img src={GraphQlLogo} className='skills' alt='GraphQL'/>
        <img src={GitLogo} className='skills' alt='Git'/>
        <img src={CLogo} className='skills' alt='C++'/>
        <img src={NextLogo} className='skills' alt='Next.JS'/>
      </div>
    </div>
  );
};
  
export default Skills;