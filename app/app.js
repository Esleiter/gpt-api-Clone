import express from "express";
import corsMiddleware from "./middlewares/cors.js";
import router from "./routes/index.js";

const app = express();
app.use(corsMiddleware);
app.use(express.json());

app.use("/v1/engines", router);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
