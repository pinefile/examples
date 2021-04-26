const { log } = require('@pinefile/pine');
const chokidar = require('chokidar');

const watch = (dirs, cb) => {
  return new Promise((resolve, reject) => {
    const files =
      typeof dirs === 'string' ? [dirs] : Array.isArray(dirs) ? dirs : [];

    if (!files.length) {
      return resolve(null);
    }

    log.info(`Watching ${files.join(', ')}`);

    const watcher = chokidar.watch(files);

    watcher.on('change', cb);
    watcher.on('close', () => {
      resolve(null);
    });

    watcher.on('error', (error) => {
      reject(error);
    });
  });
};

module.exports = {
  watch,
};
