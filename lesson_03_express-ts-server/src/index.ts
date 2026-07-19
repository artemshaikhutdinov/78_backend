import express from "express";
import { log } from "node:console";

//creation of an app. Controlling of the server 
const app = express();

//Middleware - teaches the server to understand JSON
app.use(express.json());

// Test method for checking of app work
// get - using of the method GET
// "/health" - address (+http://localhost:3000)
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} http://localhost:${PORT}`);
});
