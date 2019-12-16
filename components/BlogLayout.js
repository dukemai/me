import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const BlogLayout = ({ children }) => (
  <section>
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu" data-dropdown-menu>
          <li className="menu-text">Duc Mai's Blog</li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
        </ul>
      </div>
    </div>
    <section className="row">
      <section className="small-12 medium-9 large-10 medium-push-3 large-push-2 columns">
        {children}
      </section>
    </section>
  </section>
);
BlogLayout.propTypes = propTypes;
BlogLayout.defaultProps = defaultProps;
export default BlogLayout;
