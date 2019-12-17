module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
    "react/prop-types": [0],
    "semi": ["error", "always", { "omitLastInOneLineBlock": true}],
    "no-case-declarations)": [0],
    "comma-dangle": ["error", {
      "arrays": "only-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "only-multiline",
      "functions": "never"
    }],
    "handle-callback-err": [0],
    "no-case-declarations": [0]
  }
}
