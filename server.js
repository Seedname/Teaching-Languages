const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');
const http = require('http');
const https = require('https');

const privateKey  = fs.readFileSync('/etc/letsencrypt/live/tucanspeak.ddns.net/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/tucanspeak.ddns.net/fullchain.pem', 'utf8');
const credentials = {cert: certificate, key: privateKey};

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(80);
https.createServer(credentials, app).listen(443);

app.use(express.static('public'));

const configuration = new Configuration({
    apiKey: '',
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
      let searchTerm = req.body.searchTerm;
      searchTerm = "hello";
      // Update this part
      const response = await getAiResponse(searchTerm);
  
      res.json({ answer: response});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});
  

