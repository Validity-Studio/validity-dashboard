const { execSync } = require('child_process');
try {
  const out = execSync('npx.cmd jest');
  console.log(out.toString());
} catch (e) {
  console.error(e.stdout.toString());
  console.error(e.stderr.toString());
}
