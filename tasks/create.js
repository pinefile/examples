const { log } = require('@pinefile/pine');
const inquirer = require('inquirer');

module.exports = {
  default: async (args) => {
    const questions = [
      {
        type: 'input',
        name: 'fileName',
        message: 'File name',
        default: args._.length ? args._[0] : '',
        validate: (x) => (!x ? 'Cannot be empty' : true),
      },
    ];

    const answers = await inquirer.prompt(questions);
    log.info(`Created file: ${answers.fileName}`);
  },
};
