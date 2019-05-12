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
          <span>{points} points</span>
        </li>
      </ul>
    </div>
  </div>
);
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
