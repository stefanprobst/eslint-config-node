module.exports = {
  root: true,
  env: {
    es2020: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
  ],
};
