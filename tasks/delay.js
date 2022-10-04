import { log } from '@pinefile/pine';

const delay = (time) => new Promise((res) => setTimeout(res, time));

export default async () => {
  log.info('Wating 1500ms...');
  await delay(1500);
  log.info('Done');
};
