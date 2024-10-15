module.exports = {
  env: {
    browser: true,
    node: true, // Enable Node.js global variables
    es2021: true, // Specify ECMAScript version
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // Use recommended settings for React
    'prettier', // Integrate Prettier with ESLint
    '../../.eslintrc.js', // Adjust the path as necessary
  ],
  parser: 'babel-eslint', // If using Babel
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
    ecmaVersion: 12, // Use the latest ECMAScript version
    sourceType: 'module', // Allows for the use of imports
  },
  settings: {
    react: {
      version: 'detect', // Automatically pick the React version
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Turn off React-in-scope rule
  },
  globals: {
    require: 'readonly', // Define require as a global
    module: 'readonly', // Define module as a global
  },
};
