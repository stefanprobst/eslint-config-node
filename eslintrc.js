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
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "prettier/@typescript-eslint",
      ],
      settings: {
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
            project: "./tsconfig.json",
          },
        },
        node: {
          tryExtensions: [".js", ".json", ".node", ".ts"],
        },
      },
      rules: {
        "@typescript-eslint/strict-boolean-expressions": "error",
        "node/no-missing-import": [
          "error",
          {
            resolvePaths: ["node_modules/@types"],
          },
        ],
        "node/no-unsupported-features/es-syntax": [
          "error",
          {
            ignores: ["modules"],
          },
        ],
        "node/shebang": [
          "error",
          {
            convertPath: {
              "src/**/*.ts": ["^src/(.+?)\\.ts$", "dist/$1.js"],
            },
          },
        ],
      },
    },
  ],
};
