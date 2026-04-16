const { execSync } = require('child_process');
try {
  const out = execSync('npx.cmd next build');
  console.log(out.toString());
} catch (e) {
  console.error(e.stdout ? e.stdout.toString() : '');
  console.error(e.stderr ? e.stderr.toString() : e);
}
