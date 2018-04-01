"use strict";
//production
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

var webpack = require("webpack");
var express = require("express");
var path = require("path");
var React = require("react");
var {createStore} = require("redux");
var {Provider} = require("react-redux");
var {StaticRouter} = require("react-router-dom");
var Main = require("./router/index.js").Main;
var {renderToString} = require("react-dom/server");
var {ConnectedRouter} = require("react-router-redux");
var {createServer} = require("http");
var store = require("./store.js");
var createHistory = require("history").createMemoryHistory;

/**
 * 构建基于nodehistory
 * @param {Type}  Value -  Note
 * @param {Type}  Value -  Note
 */
// var store = createStore(reducers);
var port = 4000;

/**
 * 设置react内部全局必须变量
 * @param {Type}  Value -  Note
 * @param {Type}  Value -  Note
 */

createServer((req, res) => {
  var history = createHistory();
  var context = {};
  console.log(req.url);
  var html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Main />
      </StaticRouter>
    </Provider>,
  );

  res.write(`
<!doctype html>
    <html>
      <head>
            <title>author(940079461@qq.com)</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
`);
  res.end();
}).listen(port);
