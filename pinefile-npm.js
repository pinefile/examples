const { configure, log } = require('@pinefile/pine');

configure({
  runner: '@pinefile/runner-npm',
});

module.exports = {
  hello: () => {
    log.info('hello task is not in package.json');
  },
};
