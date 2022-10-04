import { configure, log } from '@pinefile/pine';

configure({
  runner: '@pinefile/runner-npm',
});

export default {
  hello: () => {
    log.info('hello task is not in package.json');
  },
};
