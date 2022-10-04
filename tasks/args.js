import { configure, log, filterArgs } from '@pinefile/pine';

configure({
  options: {
    format: {
      default: 'esm',
    },
  },
});

export default {
  default: (args) => {
    console.log(args);
  },
  build: (args) => {
    log.info(`Building: ${args.format}`);
  },
  filter: (args) => {
    log.info(`Filter: ${JSON.stringify(filterArgs(args), null, 2)}`);
  },
};
