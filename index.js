const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const weatherRouter = require("./weather/router");
const productRouter = require("./products/router");

const app = express();

const corsMiddleware = cors();
app.use(corsMiddleware);

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use(weatherRouter);
app.use(productRouter);

app.get("/", (req, res, next) => {
  res.send("hello world");
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port :${port}`));
