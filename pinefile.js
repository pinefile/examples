const { configure } = require('@pinefile/pine');
const glob = require('glob');

configure({
  logger: require('@jitesoft/yolog/node').logger,
});

const tasks = glob
  .sync('./tasks/*.js', {
    ignore: './tasks/utils.js',
  })
  .reduce((prev, cur) => {
    const name = cur.split('/').pop().replace('.js', '');
    return { ...prev, [name]: require(cur) };
  }, {});

module.exports = tasks;
