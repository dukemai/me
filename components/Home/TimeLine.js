import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import me from '../../data/me';

const propTypes = {};
const defaultProps = {};
const TimeLine = ({}) => (
  <>
    <section className="portfolio-resume-wrapper portfolio-resume-wrapper--timeline">
    <p className="h3 portfolio-resume-header">Working histories</p>

      <div className="timeline">
        {me.projects.map((project, key) => (
          <div key={key} className="timeline-item">
            <div className="timeline-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M9 21h-9v-2h9v2zm6.695-2.88l-3.314-3.13-1.381 1.47 4.699 4.54 8.301-8.441-1.384-1.439-6.921 7zm-6.695-1.144h-9v-2h9v2zm8-3.976h-17v-2h17v2zm7-4h-24v-2h24v2zm0-4h-24v-2h24v2z" />
              </svg>
            </div>
            <div
              className={classnames('timeline-content', {
                right: key % 2 === 0,
              })}
            >
              <p className="timeline-content-date">{project.year}</p>
              <h5>{project.name}</h5>
              <h6>{project.responsibility}</h6>
              <p>{project.description}</p>
              <p>
                {project.stacks.map(stack => (
                  <span key={stack} className="label secondary">
                    {stack}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);
TimeLine.propTypes = propTypes;
TimeLine.defaultProps = defaultProps;
export default TimeLine;
