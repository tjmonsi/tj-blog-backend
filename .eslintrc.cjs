module.exports = {
  extends: [
    'semistandard',
    'plugin:security/recommended'
  ],
  parser: '@babel/eslint-parser',
  plugins: [
    'standard',
    'promise',
    'mocha',
    'html',
    'chai-expect',
    'security'
  ],
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  rules: {
    'no-unused-expressions': 0
  },
  globals: {
    expect: true
  }
};
