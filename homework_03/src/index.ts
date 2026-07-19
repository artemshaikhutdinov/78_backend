import express from "express";
import { log } from "node:console";

const app = express();

app.use(express.json());

app.get("/about", (_req, res) => {
  res.status(200).json({ name: "Artem", course: "Backend Development" });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} http://localhost:${PORT}`);
});
