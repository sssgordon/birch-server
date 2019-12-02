const express = require("express");
const db = require("./db");
const weatherRouter = require("./weather/router");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const corsMiddleware = cors();
app.use(corsMiddleware);

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use(weatherRouter);

app.get("/", (req, res, next) => {
  res.send("hello world");
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port :${port}`));
