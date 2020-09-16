module.exports = {
  root: true,
  env: {
    es2020: true,
    "jest/globals": true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-restricted-globals": [
      "error",
      {
        name: "isNaN",
        message: "Use Number.isNaN instead.",
      },
    ],
    "import/order": [
      "error",
      { alphabetize: { order: "asc", caseInsensitive: true } },
    ],
    "import/no-anonymous-default-export": "error",
    "node/prefer-global/url": ["warn"],
    "node/prefer-global/url-search-params": ["warn"],
    "node/prefer-promises/fs": ["warn"],
  },
};
