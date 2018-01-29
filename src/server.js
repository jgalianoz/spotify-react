const http = require('http');
//import React from 'react';
//import { renderToString } from 'react-dom/server';

const layout = require('./index.html');

const port = 3000;

function requestHandler(req, res) {
  res.setHeader('Content-Type', 'text/html');

  res.write(
    layout()
  )
  res.end();
}

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
})
