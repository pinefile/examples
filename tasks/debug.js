import { getConfig } from '@pinefile/pine';

export default (args) => {
  console.log('args', args);
  console.log('config', getConfig());
};
