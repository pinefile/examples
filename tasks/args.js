const { configure, log } = require('@pinefile/pine');

configure({
  options: {
    format: {
      default: 'esm',
    },
  },
});

module.exports = {
  build: (argv) => {
    log.info(`Building: ${argv.format}`);
  },
};
