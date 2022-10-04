import { getConfig } from '@pinefile/pine';

export default async () => {
  console.log('Running with @swc-node/register', getConfig());
  console.log(
    arguments ///.some((x) => x.indexOf('swc-node'))
  );
};
