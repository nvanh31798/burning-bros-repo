module.exports = function override(config) {
  // New config, e.g. config.plugins.push...

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
  ];

  return config;
};