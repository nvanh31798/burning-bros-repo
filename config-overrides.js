// const path = require('path');
// // config-overrides.js
// module.exports = function override(config, env) {
//   // New config, e.g. config.plugins.push...

//   config.module.rules = [
//     ...config.module.rules,
//     {
//       test: /\.m?js/,
//       resolve: {
//         fullySpecified: false,
//       },
//     },
//     {
//       resolve: {
//         modules: [path.resolve(__dirname, "src"), "node_modules"],
//         plugins: ["@babel/plugin-proposal-private-property-in-object"],
//       },
//     },
//   ];

//   return config;
// };