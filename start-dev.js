const { spawn } = require('child_process');
const fs = require('fs');

const out = fs.openSync('./out.log', 'a');
const err = fs.openSync('./err.log', 'a');

const server = spawn('node', ['node_modules/next/dist/bin/next', 'dev', '-p', '3000'], {
  stdio: ['ignore', out, err],
  detached: true,
  env: process.env
});

server.unref();
console.log('Server started with PID:', server.pid);
