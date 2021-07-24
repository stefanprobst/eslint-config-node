module.exports = {
  root: true,
  env: {
    es2020: true,
    "jest/globals": true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:node/recommended",
    "prettier",
  ],
  rules: {
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        requireReturnForObjectLiteral: true,
      },
    ],
    "consistent-return": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-console": "warn",
    "no-implicit-coercion": "error",
    "no-param-reassign": "error",
    "no-restricted-globals": [
      "error",
      {
        name: "isNaN",
        message: "Use Number.isNaN instead.",
      },
    ],
    "no-throw-literal": "error",
    "no-var": "error",
    "prefer-const": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],

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
        "@typescript-eslint/array-type": [
          "error",
          {
            default: "generic",
          },
        ],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/naming-convention": "warn",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/strict-boolean-expressions": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
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
