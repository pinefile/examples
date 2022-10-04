import { configure, tasks } from '@pinefile/pine';

configure({
  logger: require('@jitesoft/yolog/node').logger,
});

export default tasks('./tasks');
