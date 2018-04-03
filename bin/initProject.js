#!/usr/bin/env node

const copyDir = require("./copyDir.js");
const fs = require("fs");
const emoji = require("node-emoji");
const childProcess = require("child_process");
const jsonfile = require("jsonfile");

/**
 * 新建项目初始化并复制模板
 * @param {String}  dir -  用户新建projectname
 * @param {Type}  Value -  Note
 */
async function initProject(projectName) {
  const copySourcePath = `${__dirname}`;
  fs.mkdirSync(projectName);
  await copyDir(`${copySourcePath}/project`, projectName, function(err) {
    if (err) console.log(err);
  });

  fs.readFile(`${copySourcePath}/projectPackage.json`, function(err, data) {
    if (err) throw err;
    packageJson = JSON.parse(data);
    packageJson.name = projectName;
    fs.writeFile(
      `./${projectName}/package.json`,
      JSON.stringify(packageJson),
      function(err) {
        if (err) {
          throw err;
        } else {
          const onMissing = function(name) {
            return name;
          };
          let childProcess = require("child_process");
          const emojified = emoji.emojify(":coffee:", onMissing);
          console.log(
            "\x1b[34m",
            "Redux workstation built on the create-react-app.",
          );
          console.log(
            "\x1b[36m",
            "react, redux , react-router, render service!",
          );
          console.log(
            "\x1b[31m",
            emojified + "Please don't quit , npm request node_modules",
          );
          // 执行npm脚本
          childProcess.exec(`cd ${projectName} && npm install `, function(
            err,
            stdout,
            stderr,
          ) {
            console.log("\x1b[32m", stdout);

            console.log(
              "\x1b[36m",
              `base run : cd ${projectName} && npm start`,
            );

            console.log(
              "\x1b[36m",
              `base run : cd ${projectName} && npm build`,
            );
            console.log("\x1b[36m", `base run : cd ${projectName} && npm test`);
            console.log("\x1b[36m", "start to work");
          });
        }
      },
    );
  });
}

module.exports = initProject;
