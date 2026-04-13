const { execSync } = require('child_process');
try {
  execSync('npx next build', { stdio: 'inherit' });
} catch (e) {
  console.error('Failed to compile');
}
