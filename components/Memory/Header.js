import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Header = ({ points = 0 }) => (
  <div className="top-bar cell">
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu>
        <li className="menu-text">The Memory Game</li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li>
          <label>
            Images:
            <select id="select" required>
              <option value="" />
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </label>
        </li>
        <li>
          <span>{points} points</span>
        </li>
      </ul>
    </div>
  </div>
);
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
