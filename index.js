require("dotenv").config();
require("morgan");

const debug = require("debug")("API:root");
const chalk = require("chalk");
const express = require("express");
const morgan = require("morgan");

const app = express();

const thingsWeKnow = [
  {
    id: 0,
    thing: "javaScript",
  },
  {
    id: 1,
    thing: "HTML",
  },
];

const port = process.env.SERVER_PORT ?? 5000;

const server = app.listen(port, () => {
  debug(chalk.greenBright(`server running on port ${port}`));
});

server.on("error", (error) => {
  debug(chalk.redBright("all wrong.. could'nt be worse..."));
  if (error.code === "") {
    debug(chalk.red("ERROR!!!! ALL WRONG"));
  }
});

app.use(morgan("dev"));

debug(thingsWeKnow);
