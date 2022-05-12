require("dotenv").config();

const debug = require("debug")("API:root");
const chalk = require("chalk");
const express = require("express");
const morgan = require("morgan");
const router = require("./routers/thingsWeKnowRouters");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.greenBright(`server listening on port ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.redBright("all wrong.. could'nt be worse..."));
    if (error.code === "EADDRINUS") {
      debug(chalk.red("ERROR!!!! ALL WRONG"));
    }
  });
};

app.use(morgan("dev"));
app.use(express.json());
app.use("/things", router);

module.exports = initializeServer;
