import { log, filterArgs, getConfig } from '@pinefile/pine';

export default {
  default: (args) => {
    log.info(args);
  },
  build: (args) => {
    log.info(`Building: ${args.format || 'esm'}`);
  },
  filter: (args) => {
    log.info(`Filter: ${JSON.stringify(filterArgs(args), null, 2)}`);
  },
};
