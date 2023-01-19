// A express server, which will handle api request coming in and response back with a json object, it will use boduy parser as well as cors.
const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

const configuration = new Configuration({
  organization: "org-am1zJg33B6oq8uLYbPXJbLsT",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 1000,
    temperature: 0,
  });

  console.log(response.data);
  if (response.data.choices[0].text) {
    res.json({ message: response.data.choices[0].text });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
