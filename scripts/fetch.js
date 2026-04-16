const http = require('http');
const fs = require('fs');

http.get('http://localhost:3006', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('page4.html', data);
    console.log('done');
  });
}).on('error', (err) => console.log('error: ' + err.message));
