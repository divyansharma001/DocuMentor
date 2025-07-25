import express from "express";
import dotenv from "dotenv";
import { initAgent } from "./agent";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000", "http://localhost:8080"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

let chain: any;

(async () => {
  chain = await initAgent();
})();

app.post("/ask", async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: "Missing 'question' in request body." });
  }
  try {
    const answer = await chain.invoke({ question });
    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to process the question." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 