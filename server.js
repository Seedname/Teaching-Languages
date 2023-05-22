const http = require('http');
const path = require('path');
const fs = require('fs');
const openai = require('openai');

const server = http.createServer((req, res) => {
    let filePath = "." + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }
  
    let extname = path.extname(filePath);

    let contentType = 'text/plain';
    switch (extname) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
        case '.ico':
            contentType = "image/vnd.microsoft.icon";
            break;
    }
  
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(err.message);
        return;
      }

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    });

});

server.listen(80);