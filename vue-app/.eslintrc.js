module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@vue/airbnb', 'plugin:vue/essential'],
  plugins: [],
  // watch this for explaining why some of this is here
  // https://www.youtube.com/watch?time_continue=239&v=YIvjKId9m2c
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'consistent-return': 0,
    'linebreak-style': 0,

    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
