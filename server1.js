const http = require('http');
const path = require('path');
const fs = require('fs');
const openai = require('openai');
const axios = require('axios');

const OPENAI_API_KEY = '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';
const API_URL = 'https://api.openai.com/v1/engines/davinci/completions';

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

// // Example usage
// generateText('Translate the following English text to French: "Hello, how are you?"')
//   .then((result) => console.log(`Generated text: ${result}`))
//   .catch((error) => console.error(`Error: ${error}`));
const querystring = require('querystring');
const url = require('url');
const fetch = require('cross-fetch');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/') {
        let body = '';
    
        req.on('data', (chunk) => {
          body += chunk;
        });
    
        req.on('end', () => {
            const data = decodeURI(body).split('=')[1];
        
            // Format the data for the GPT API
            const input = {
              prompt: data,
              max_tokens: 1000,  // Adjust the max_tokens as per your requirement
              temperature: 0.8  // Adjust the temperature as per your preference
            };
        
            const requestBody = JSON.stringify(input);
        
            // Make a request to the GPT API using the formatted data
            fetch(API_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
              },
              body: requestBody
            })
            .then(response => response.json())
            .then(output => {
              console.log('GPT API output:', output);
              const completion = output.choices[0].text;
              const promptTokens = output.usage.prompt_tokens;
              const completionTokens = output.usage.completion_tokens;
              
              console.log('Generated Completion:', completion);
              console.log('Prompt Tokens:', promptTokens);
              console.log('Completion Tokens:', completionTokens);
              // Send the GPT API response back to the client
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(output));
            })
            .catch(error => {
              console.error('Error:', error);
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Internal Server Error');
            });
          });
    }




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