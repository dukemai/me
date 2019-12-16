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
      <h5>Me on social networks</h5>
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
    <div className="portfolio-resume-contact-info">
      <h5>Blogs I wrote</h5>
      <ul>
        {me.blogs.map(thing => (
          <li key={thing.name}>
            <a target="_blank" href={thing.link}>
              {thing.name}
            </a>
            <p>{thing.description}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="portfolio-resume-contact-info">
      <h5>Free things by me</h5>
      <ul>
        {me.freeThings.map(thing => (
          <li key={thing.name}>
            <a target="_blank" href={thing.link}>
              {thing.name}
            </a>
            <p>{thing.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
AboutMe.propTypes = propTypes;
AboutMe.defaultProps = defaultProps;
export default AboutMe;
