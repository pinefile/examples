const { log, run } = require('@pinefile/pine');

module.exports = {
  args: require('./tasks/args'),
  delay: require('./tasks/delay'),
  plugins: require('./tasks/plugins'),
  test: require('./tasks/test'),
  watch: require('./tasks/watch'),
};
