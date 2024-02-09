import axios from "axios";

const postPrompt = async (req, res) => {
  const uri = "http://ollama-two:11434/api/generate";
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
    if (error.response.status === 404) {
      const fallbackModel = "llama2";
      postData.model = fallbackModel;
      try {
        const fallbackResponse = await axios.post(uri, postData);
        res.json({
          model: fallbackModel,
          choices: [{ text: fallbackResponse.data.response }],
        });
      } catch (fallbackError) {
        console.error("Fallback Error:", fallbackError);
        return res.status(500).json({ msg: "Fallback server error" });
      }
    } else {
      console.error("Error:", error);
      return res.status(500).json({ msg: "Server error" });
    }
  }
};

export { postPrompt };
