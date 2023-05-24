const http = require('http');
const path = require('path');
const fs = require('fs');
const openai = require('openai');
const axios = require('axios');

const OPENAI_API_KEY = 'your-api-key-here';
const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function generateText(prompt) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
    };

    const data = {
        prompt: prompt,
        max_tokens: 50, // Adjust this value based on your desired response length
        n: 1,
        stop: null,
        temperature: 1,
    };

    try {
        const response = await axios.post(API_URL, data, { headers: headers });
        const generatedText = response.data.choices[0].text;
        return generatedText;
    } catch (error) {
        console.error(`Error generating text: ${error}`);
        return null;
    }
}

// Example usage
generateText('Translate the following English text to French: "Hello, how are you?"')
  .then((result) => console.log(`Generated text: ${result}`))
  .catch((error) => console.error(`Error: ${error}`));
  
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