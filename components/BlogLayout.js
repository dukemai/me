import React from "react";
import PropTypes from "prop-types";

import '../blog.scss';

const propTypes = {};
const defaultProps = {};
const BlogLayout = ({ children }) => (
  <section className="blog">
    <nav className="site-navigation top-bar">
      <div className="top-bar-left">
        <div class="site-desktop-title top-bar-title">
          <a href="/" rel="home" title="Home">
            Duc Mai's Blog
          </a>
        </div>
        <nav className="main-navigation">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-item menu-item-type-custom">
              <a href="/">Profile</a>
            </li>
            <li className="menu-item menu-item-type-custom">
              <a href="/blogs">Blogs</a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
    <section className="row main-container">
      <section className="small-12 medium-9 large-10 medium-push-3 large-push-2 columns">
        {children}
      </section>
    </section>
  </section>
);
BlogLayout.propTypes = propTypes;
BlogLayout.defaultProps = defaultProps;
export default BlogLayout;
