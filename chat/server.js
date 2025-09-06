import express from "express";
import bodyParser from "body-parser";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Open DB
const dbPromise = open({
  filename: "chat.db",
  driver: sqlite3.Database
});

// Initialize DB
(async () => {
  const db = await dbPromise;
  await db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);
})();

// Get all messages
app.get("/messages", async (req, res) => {
  const db = await dbPromise;
  const messages = await db.all("SELECT * FROM messages ORDER BY created_at ASC");
  res.json(messages);
});

// Add a new message
app.post("/messages", async (req, res) => {
  const db = await dbPromise;
  const { username, text } = req.body;
  if (!text || !username) return res.status(400).json({ error: "Message and username required" });

  await db.run("INSERT INTO messages (username, text) VALUES (?, ?)", [username, text]);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
