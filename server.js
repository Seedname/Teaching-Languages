const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');
const http = require('http');
const https = require('https');

const privateKey  = fs.readFileSync('/etc/letsencrypt/live/tucanspeak.ddns.net/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/tucanspeak.ddns.net/fullchain.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.use(express.static('public'));

const configuration = new Configuration({
    apiKey: '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',
});
  
// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

async function getAiResponse(topic) {
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: topic,
      max_tokens: 1024,
      n: 1,
      stop: null,
      temperature: 0.7
    });
    return completion.data.choices[0].text;
}

// Handle the form POST request and get the response from OpenAI API
app.post('/ask', async (req, res) => {
    try {
      const searchTerm = req.body.searchTerm;
  
      // Update this part
      const response = await getAiResponse(searchTerm);
  
      res.json({ answer: response});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});
  
httpServer.listen(80);
httpsServer.listen(443);
