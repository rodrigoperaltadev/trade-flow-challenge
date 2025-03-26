module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  env: {
    "react-native/react-native": true,
    es6: true,
  },
  extends: [
    "expo",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: [
    "react",
    "react-native",
    "@typescript-eslint",
    "react-hooks",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",

    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-console": "warn",
  },
};
