const { execSync } = require('child_process');
const fs = require('fs');

try {
  console.log('Running npm install...');
  const out = execSync('npm.cmd install', { encoding: 'utf-8', maxBuffer: 1024 * 1024 * 10 });
  const path = require('path');
  const logDir = path.join(__dirname, '..', 'logs');
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
  
  fs.writeFileSync(path.join(logDir, 'install.log'), out);
  console.log('Done');
} catch (e) {
  const path = require('path');
  const logDir = path.join(__dirname, '..', 'logs');
  fs.writeFileSync(path.join(logDir, 'install.log'), e.stdout ? e.stdout.toString() : e.toString());
  fs.writeFileSync(path.join(logDir, 'install.err'), e.stderr ? e.stderr.toString() : e.toString());
  console.error('Failed', e.message);
}
