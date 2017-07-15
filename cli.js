#!/usr/bin/env node

const path = require('path');
const dotenv = require('dotenv');
dotenv.load({path: '.env'});
const child = spawn(argv._[0], argv._.slice(1), {
  stdio: 'inherit',
}).on('exit', function(exitCode) {
  child = null;
  process.exit(exitCode);
});
process.on('exit', () => {
  child && child.kill();
});
