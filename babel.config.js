module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],

    presets: ["module:metro-react-native-babel-preset"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
