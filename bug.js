const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// This is a common error for beginners, and may not always throw an error, but may lead to unexpected behavior
// Missing error handling and not checking for the existence of process.env.PORT

//Error Handling
//The process.env.PORT may not always be defined.  So it's important to check for it's existence
// before using it.

//Solution:
// check for existence using optional chaining and providing a default value
const port = process.env.PORT ?? 3000;