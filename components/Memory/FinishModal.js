import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const FinishModal = ({ points = 0, time, onPlayAgainClicked }) => (
  <div style={{ display: 'block' }} className="reveal-overlay">
    <div  style={{ display: 'block' }} className="tiny reveal">
      <p>Yay!!! you are done</p>
      <p>Your scores {points} in </p>
      <div>
        <button onClick={onPlayAgainClicked} className="button">Play again</button>
      </div>
    </div>
  </div>
);
FinishModal.propTypes = propTypes;
FinishModal.defaultProps = defaultProps;
export default FinishModal;
