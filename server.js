const express = require('express');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add this line to serve static files
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
  


const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});