import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {};
const defaultProps = {};
const Flipper = ({ front, back, isOpen, onFlipping }) => (
  <div
    onClick={onFlipping}
    className={classnames('flipper', { 'flipper--open': isOpen })}
  >
    <div className="front">{front}</div>
    <div className="back">{back}</div>
  </div>
);
Flipper.propTypes = propTypes;
Flipper.defaultProps = defaultProps;
export default Flipper;
