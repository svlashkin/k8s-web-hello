import os from "os";
import express from "express";

const PORT = 3000;
const hostname = os.hostname();
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>VERSION 1: Hello from the ${hostname}!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
