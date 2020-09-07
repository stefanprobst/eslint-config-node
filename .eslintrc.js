module.exports = {
  root: true,
  env: {
    es2020: true,
    "jest/globals": true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "node/prefer-global/url": ["warn"],
    "node/prefer-global/url-search-params": ["warn"],
    "node/prefer-promises/fs": ["warn"],
  },
};
