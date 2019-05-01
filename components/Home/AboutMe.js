import React from 'react';
import PropTypes from 'prop-types';
import me from '../../data/me';

const propTypes = {};
const defaultProps = {};
const AboutMe = ({}) => (
  <div className="portfolio-resume-wrapper">
    <h3 className="portfolio-resume-header">About Me</h3>
    {me.aboutme.content.map((paragraph, key) => (
      <p key={key}>{paragraph}</p>
    ))}

    <div className="portfolio-resume-contact-info">
      <h5>Connect with me</h5>
      <a
        className="portfolio__link"
        href="https://www.linkedin.com/in/duc-mai-96b0846b/"
      >
        <i className="fa fi-social-linkedin" aria-hidden="true" />
        Linkedin
      </a>
      <a
        href="https://stackoverflow.com/users/8327733/duc-mai
/"
        className="portfolio__link"
      >
        <i className="fa fi-social-stack-overflow" aria-hidden="true" />
        Stackoverflow
      </a>
    </div>
  </div>
);
AboutMe.propTypes = propTypes;
AboutMe.defaultProps = defaultProps;
export default AboutMe;
