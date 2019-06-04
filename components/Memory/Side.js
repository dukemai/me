import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};
const imageCategorie = ['Cats', 'Dogs', 'Car'];

const formatTime = time => {
  const minutes = Math.floor(time / 60 / 1000);
  const seconds = Math.floor(time / 1000) - minutes * 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;
};
const Side = ({ selectedCat, points = 0, onChange, startTime, showFinish }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let rf;
    if (startTime && !showFinish) {
      rf = requestAnimationFrame(() => {
        const now = new Date();
        setTime(now - startTime);
      });
    }

    return () => rf && cancelAnimationFrame(rf);
  }, [startTime, time, showFinish]);
  return (
    <div className="cell medium-2 cell--side">
      <ul className="menu vertical">
        <li>
          <h4 className="menu-text">The Memory Game</h4>
        </li>

        <li>
          <span className="menu-text">{points} points</span>
        </li>
        <li>
          <span className="menu-text">Time: {formatTime(time)}</span>
        </li>
        <li className="menu-dropdown">
          <span>Play images</span>
          <select defaultValue={selectedCat} onChange={onChange}>
            {imageCategorie.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </li>
        <li>
          <a href="https://www.buymeacoffee.com/ducmai">Buy me a coffee</a>
        </li>
      </ul>
    </div>
  );
};
Side.propTypes = propTypes;
Side.defaultProps = defaultProps;
export default Side;
