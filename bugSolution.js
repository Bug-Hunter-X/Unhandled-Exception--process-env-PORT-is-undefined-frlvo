const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

// Check if process.env.PORT is defined before using it
const port = process.env.PORT ?? 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});