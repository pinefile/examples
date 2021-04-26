const { shell } = require('@pinefile/pine');

const getLatestCommitID = async () => shell(`git rev-parse --short HEAD`);

module.exports = {
  getLatestCommitID,
};
