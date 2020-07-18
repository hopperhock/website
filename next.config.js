module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/
        },
        use: ['@svgr/webpack']
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    );

    return config;
  }
};
