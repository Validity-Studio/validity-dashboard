const { execSync } = require('child_process');
const fs = require('fs');

try {
  console.log('Running npm install...');
  const out = execSync('npm.cmd install', { encoding: 'utf-8', maxBuffer: 1024 * 1024 * 10 });
  fs.writeFileSync('i.log', out);
  console.log('Done');
} catch (e) {
  fs.writeFileSync('i.log', e.stdout ? e.stdout.toString() : e.toString());
  fs.writeFileSync('i.err', e.stderr ? e.stderr.toString() : e.toString());
  console.error('Failed', e.message);
}
