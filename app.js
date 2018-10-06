'use strict';

const logger = require('node-color-log');
const minimist = require('minimist');
const Game = require('./controllers/Game');

module.exports = () => {
  const game = new Game();

  // CLI Args
  const argv = minimist(process.argv.slice(2));
  const cmd = argv._[0];
  argv._.shift();

  if(cmd) {
    switch (cmd) {
      case 'new-game':
        break;
      case 'new-bowler':
        break;
      case 'score':
        break;
      case 'roll':
        break;
      default:
        logger.error(`Command '${cmd}' not found`);
    }
  } else {
    logger.error(`Command missing. Try again.`);
  }
}
