import React from 'react';
import PropTypes from 'prop-types';

import me from '../../data/me';

const propTypes = {};
const defaultProps = {};
const Skills = ({}) => (
  <>
    <h3 className="portfolio-resume-header">Skills</h3>
    <ul>
      {me.skills.map(skill => (
        <li key={skill.id}>{skill.title}</li>
      ))}
    </ul>
  </>
);
Skills.propTypes = propTypes;
Skills.defaultProps = defaultProps;
export default Skills;
