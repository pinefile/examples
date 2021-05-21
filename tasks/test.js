const { run } = require('@pinefile/pine');

module.exports = {
  default: async () => await run('jest'),
};
