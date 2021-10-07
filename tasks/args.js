const { configure, log, filterArgs } = require('@pinefile/pine');

configure({
  options: {
    format: {
      default: 'esm',
    },
  },
});

module.exports = {
  build: (args) => {
    log.info(`Building: ${args.format}`);
  },
  filter: (args) => {
    log.info(`Filter: ${JSON.stringify(filterArgs(args), null, 2)}`);
  },
};
