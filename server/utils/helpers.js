const chalk = require('chalk');

const consl = (color, message) => {
  console.log(chalk[color](message));
};

module.exports = {
  consl
};
