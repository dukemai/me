const withSass = require('@zeit/next-sass');
module.exports = withSass({
  target: 'serverless',
  sassLoaderOptions: {
    includePaths: ['node_modules'],
    externals: ['foundation-sites'],
    autoprefixer: {
      browsers: ['last 2 versions', 'ie >= 9', 'android >= 4.4', 'ios >= 7'],
    },
  },
});
