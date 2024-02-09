# GPT API Clone

This project uses Node.js and Express to provide completions functionality similar to the OpenAI API. This REST API service acts as a clone of the original functionality, using Ollama.

## Installation

Make sure you have Docker installed on your machine before following these steps.

1. Clone this repository:

```bash
gh repo clone Esleiter/gpt-api-Clone
cd gpt-api-Clone
```

2. Run the following command to start the services:

```bash
docker compose up -d && sh downloadLlama2.sh
```

This command will start the services in a Docker container and run the downloadLlama2.sh script to download llama2, the default model to use. Please note that downloading the model may take some time due to the size of the model.
