import { log } from '@pinefile/pine';
import { watch } from '../plugins/watch';

export default () => async () => {
  await watch('src/*.js', () => {
    log.info('File changed');
  });
};
