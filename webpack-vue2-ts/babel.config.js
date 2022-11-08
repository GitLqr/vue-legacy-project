module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 3,
        targets: {
          ios: "8",
          android: "4",
          chrome: "58",
        },
      },
    ],
  ],
  plugins: [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-proposal-optional-chaining",
  ],
};
