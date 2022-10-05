import { configure, tasks } from '@pinefile/pine';

// global configure
configure({
  logger: require('@jitesoft/yolog/node').logger,
});

export default tasks('./tasks');
