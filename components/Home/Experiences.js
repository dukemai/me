import React from 'react';
import PropTypes from 'prop-types';
import me from '../../data/me';

const propTypes = {};
const defaultProps = {};
const hasList = experience =>
  Boolean(experience.list && experience.list.length);
const Experiences = ({}) => (
  <div className="portfolio-resume-wrapper">
    <h3 className="portfolio-resume-header">Experience</h3>

    {me.experiences.map(experience => (
      <div key={experience.id} className="portfolio-resume-spacing">
        <h5>
          <strong>{experience.title}</strong>
        </h5>
        <p>{experience.description}</p>
        {hasList(experience) && (
          <ul>
            {experience.list.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);
Experiences.propTypes = propTypes;
Experiences.defaultProps = defaultProps;
export default Experiences;
