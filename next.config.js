const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/AndersAskeland.github.io'
  : '';

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};