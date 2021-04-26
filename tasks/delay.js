const { log } = require('@pinefile/pine/dist');

const delay = (time) => new Promise((res) => setTimeout(res, time));

module.exports = {
  default: async () => {
    log.info('Wating 1500ms...');
    await delay(1500);
    log.info('Done');
  },
};
