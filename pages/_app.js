import App, { Container } from 'next/app';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import '../styles.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    );
  }
}

export default MyApp;
