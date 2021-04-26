const { log } = require('@pinefile/pine');
const { watch } = require('../plugins/watch');

module.exports = {
  default: async () => {
    await watch('src/*.js', () => {
      log.info('File changed');
    });
  },
};
