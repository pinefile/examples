const { echo } = require('../plugins/echo');

module.exports = {
  build: () => {
    echo(`Building...`);
  },
};
