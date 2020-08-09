const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
<!DOCTYPE html>
<head>
    <meta http-equiv="refresh" content="0; URL='http://forms.gle/HXLQc121RU7g5fFq6'" />
</head>
<body>
    <a href="http://forms.gle/HXLQc121RU7g5fFq6">Join</a>
</body>
    `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
