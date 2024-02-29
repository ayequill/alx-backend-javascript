const app = require('http');

app
  .createServer((_, res) => {
    res.end('Hello Holberton School!');
  })
  .listen(1245);

module.exports = app;
