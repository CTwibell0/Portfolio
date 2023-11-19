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
          </div>
        </div>
        <form action='../components/Contact.php' className='contactForm' >
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
            <input type='body' id='message' name='message' placeholder='Your message'></input>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};
  
export default Contact;