const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {}; //TODO: Add local subpaths, see https://github.com/isaachinman/next-i18next/issues/824

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: { localeSubpaths },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    );

    return config;
  },
};
