const { spawnSync } = require('child_process');
const fs = require('fs');

const result = spawnSync('npx.cmd', ['next', 'build'], { encoding: 'utf-8' });

fs.writeFileSync('build-result.txt', `
--- STDOUT ---
${result.stdout}
--- STDERR ---
${result.stderr}
--- STATUS ---
${result.status}
`);
