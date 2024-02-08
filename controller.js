import axios from "axios";
const model = "codellama:7b";
const called = async (req, res) => {
  const postData = {
    model: model,
    prompt: req.body.prompt,
    stream: false,
    options: {
      temperature: req.body.temperature,
      num_predict: req.body.max_tokens,
    },
  };
  const response = await axios.post(
    "http://host.docker.internal:11434/api/generate",
    postData
  );
  res.json({
    model: model,
    choices: [{ text: response.data.response }],
  });
};

export { called };
