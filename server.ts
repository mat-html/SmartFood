import express from "express";
import cors from "cors";
import { db } from "./db";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const [result] = await db.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );
    res.status(201).json({ message: "Signup successful" });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: "Signup failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
