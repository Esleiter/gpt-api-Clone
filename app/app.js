import express from "express";
import corsMiddleware from "./middlewares/cors.js";
import router from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(corsMiddleware);

app.use("/", router);
//app.post("/v1/engines/:model/completions", called);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
