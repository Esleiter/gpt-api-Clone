import axios from "axios";

const postPrompt = async (req, res) => {
  const uri = "http://host.docker.internal:11434/api/generate";
  const model = req.params.model;
  const postData = {
    model,
    prompt: req.body.prompt,
    stream: false,
    options: {
      temperature: req.body.temperature,
      num_predict: req.body.max_tokens,
    },
  };
  try {
    const response = await axios.post(uri, postData);

    res.json({
      model,
      choices: [{ text: response.data.response }],
    });
  } catch (error) {
    if (error.response.statusText === "Not Found") {
      const model = "llama2";
      const response = await axios.post(uri, postData);
      res.json({
        model,
        choices: [{ text: response.data.response }],
      });
    } else {
      return res.status(500).json({ msg: "Server error" });
    }
  }
};

export { postPrompt };
