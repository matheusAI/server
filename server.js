const express = require("express");
const body_parser = require("body-parser")

const app = express();

const port = process.env.port || 3341;

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`servidor rodando ${port}`)
});
