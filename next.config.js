const withSass = require('@zeit/next-sass');
const remarkAttr = require('remark-attr');
const remarkContainer = require('remark-containers');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkContainer, remarkAttr],
  },
});

module.exports = withMDX(
  withSass({
    target: 'serverless',
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    sassLoaderOptions: {
      includePaths: ['node_modules'],
    },
  })
);
