import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDiscord,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
// import { NavLink, Link } from 'react-router-dom';
import './style sheets/Contact.css';
// import LinkedInLogo from '../LinkedInLogo.png';
// import DiscordLogo from '../DiscordLogo.png';
// import GitHubLogo from '../GitHubLogo.png';
const Contact = () => {
  return (
    <div className='contactPageTitle'>
      <h1 className='contactTitle'>This is the contact page</h1>
      <div className='contactPage'>
        <div className='contactLinks'>
          <h3>Get in touch with me here.</h3>
          <div className='links'>
            <a href='https://www.linkedin.com/in/collin-twibell'
              className='logos'>
              <FontAwesomeIcon icon={faLinkedin} size='3x'/>
            </a>
            <a href='https://github.com/CTwibell0'
              className='logos'>
              <FontAwesomeIcon icon={faGithub} size='3x'/>
            </a>
            <a href='https://discord.com/channels/@me/collin.t'
              className='logos'>
              <FontAwesomeIcon icon={faDiscord} size='3x'/>
            </a>
            {/* <img src={LinkedInLogo} alt='LinkedIn' className='logos'></img>
            <img src={DiscordLogo} alt='Discord' className='logos'></img>
            <img src={GitHubLogo} alt='GitHub' className='logos'></img> */}
            {/* <Link to='https://www.linkedin.com/in/collin-twibell/'>
              LinkedIn
            </Link>
            <Link to='https://github.com/CTwibell0'>
              Github
            </Link>
            <Link to='https://discord.com/channels/@me/collin.t'>
              Discord
            </Link> */}
          </div>
        </div>
        <form className='contactForm'>
          <div className='contactDetails'>
            <label for='name'>Name:</label>
            <input type='text' id='name' name='name'></input>
          </div>
          <div className='contactDetails'>
            <label for='email'>Email:</label>
            <input type='email' id='email' name='email'></input>
          </div>
          <div className='contactDetails'>
            <label for='message'>Message</label>
            <input type='text' id='message' name='message'></input>
          </div>
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};
  
export default Contact;