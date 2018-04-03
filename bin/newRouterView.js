const fs = require("fs");
const path = require("path");
const emoji = require("node-emoji");

/**
 * 获取需要创建的文件目录
 * @param {Type}  Value -  Note
 * @param {Type}  Value -  Note
 */
const getWriteName = function(driname) {
  return function(filesName) {
    return `${driname}/${filesName}`;
  };
};

/**
 * 写入目录没有则创建
 * @param {Type}  Value -  Note
 * @param {Type}  Value -  Note
 */
function createDirAndWriteFile(to) {
  var sep = path.sep;
  var folders = path.dirname(to).split(sep);
  var p = "";
  while (folders.length) {
    p += folders.shift() + sep;
    if (!fs.existsSync(p)) {
      fs.mkdirSync(p);
    }
  }
  fs.createWriteStream(to);
}

/**
 * 创建router中可使用的view
 * @param {Type}  Value -  Note
 * @param {Type}  Value -  Note
 */
function newRouterView(pageName) {
  return function(viewjsTemplate) {
    return function(updatejs) {
      return function(isTestjs) {
        return function(indexTemplatejs) {
          const onMissing = function(name) {
            return name;
          };
          const emojified = emoji.emojify(":heart:", onMissing);
          const warning = emoji.emojify(":warning:", onMissing);

          const templateJsString = viewjsTemplate(pageName);

          const templateViewPath = getWriteName(pageName)(`${pageName}.js`);
          const templateUpdateJsPath = getWriteName(pageName)(`${"update"}.js`);
          const templateStylePath = getWriteName(pageName)(`${pageName}.css`);

          const sep = path.sep;
          const folders = path.dirname(templateViewPath).split(sep);
          /**
           * 文件是否存在!
           */
          if (fs.existsSync(folders[0])) {
            return console.log(
              "\x1b[33m",
              `
                ${warning}  Create file already exists
                `,
            );
          }

          /**
           * 创建文件
           * @param {Type}  Value -  Note
           * @param {Type}  Value -  Note
           */
          createDirAndWriteFile(templateViewPath);
          createDirAndWriteFile(templateStylePath);
          if (isTestjs) {
            // 需要测试文件
          }
          /**
           * 创建component index.js
           * @param {Type}  Value -  Note
           * @param {Type}  Value -  Note
           */
          if (typeof indexTemplatejs === "function") {
            const tempalteComponentTestPath = getWriteName(pageName)(
              `${"index"}.js`,
            );
            createDirAndWriteFile(tempalteComponentTestPath);
          }

          console.log(
            "\x1b[36m",
            `
              create page to current dir  ${emojified}
              `,
          );

          /**
           * 写入template内容
           * @param {Type}  Value -  Note
           * @param {Type}  Value -  Note
           */
          if (typeof updatejs == "function") {
            const templateUpdateJsString = updatejs(pageName);
            const templateTypejsPath = getWriteName(pageName)(`${"type"}.js`);
            createDirAndWriteFile(templateTypejsPath);

            fs.writeFile(templateUpdateJsPath, templateUpdateJsString, function(
              err,
            ) {
              if (err) {
                throw err;
              } else {
                console.log(
                  "\x1b[36m",
                  `create ${templateUpdateJsPath} success`,
                );
              }
            });
          }
          fs.writeFile(templateViewPath, templateJsString, function(err) {
            if (err) {
              throw err;
            } else {
              console.log(
                "\x1b[36m",
                `create ${getWriteName(pageName)(`${pageName}.js`)} success`,
              );
            }
          });

          console.log(
            "\x1b[36m",
            "create connected store page success , it is then added to the route",
          );
        };
      };
    };
  };
}

module.exports = newRouterView;
