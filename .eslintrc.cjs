module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  plugins: ['import'],
  rules: {
    'linebreak-style': ['error', 'windows'], // for windows
  },
};
