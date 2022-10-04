import { shell } from '@pinefile/pine';

export const getLatestCommitID = async () =>
  shell(`git rev-parse --short HEAD`);
