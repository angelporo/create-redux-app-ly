#!/usr/bin/env node

const command = require("commander");
const path = require("path");
const newView = require("./newRouterView.js");
const initProject = require("./initProject.js");
const template = require("./template.js");

command
  .version(require("../package").version)
  .usage("<command>  [options]")
  .option("-n, --new <name>", "init project ", initProject)
  .option("-p, --newpage <name>", "add page to current dirname", function(
    name,
  ) {
    newView(name)(template.viewJs)(template.viewReducerJs)(false)(false);
  })
  .option(
    "-c, --newcomponent <name>",
    "add component to current dirname",
    function(name) {
      newView(name)(template.componentJs)(false)(false)(
        template.componentIndexJs,
      );
    },
  )
  .command("generate", 'generate file from a template (short-cut alias: "g")')
  .parse(process.argv);
