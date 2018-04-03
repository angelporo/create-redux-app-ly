## `create-redux-app`

基于`create-react-app` 构建开箱即用`redux` 单页面项目包
如果有自己的需求请自行修改`config/webpack.config.dev.js or webpack.config.prod.js`


## 安装:
`npm i -g create-redux-app-ly`

```
create-redux-app-ly -n myapp

cd myapp && npm start
```


- init <projectName> 初始化项目
- newpage <pageName> 新建页面到`src/router`中
- newcomponent <componentName> 新建模块页面到`/component`中

### description
```base
.
├── README.md
├── config # 脚手架配置
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── paths.js
│   ├── polyfills.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── public # 公共文件
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── scripts # 启动脚本和构建脚本
│   ├── build.js
│   ├── start.js
├── server # 服务端构建
│   ├── app.js
│   ├── index.js
│   ├── routes
│   │   ├── api.js
│   │   └── index.js
│   └── universal.js
│   └── test.js
├── src # 入口
│   ├── component # 组件
│   │   ├── header
│   │   │   ├── header.css
│   │   │   ├── header.js
│   │   │   ├── header.test.js
│   │   │   ├── index.js
│   │   │   └── logo.svg
│   │   └── template # 组件模板,用来new component,因为基本变化不大会写到cli已做参考
│   │       ├── index.js
│   │       ├── tempalte.css
│   │       ├── tempalte.js
│   │       └── tempalte.test.js
│   ├── router # 可用router component
│   │   ├── home
│   │   │   ├── home.css
│   │   │   ├── home.js
│   │   │   ├── type.js
│   │   │   └── update.js
│   │   ├── index.js
│   │   └── tempalte # new page 模板
│   │       ├── tempalte.js # 页面view
│   │       ├── template.css # 页面样式
│   │       ├── type.js # type
│   │       └── update.js # action和页面reducer
│   └── store.js # 构建store
│   ├── app.js # 注入store和router的history
│   ├── index.js # 项目入口文件
│   ├── registerServiceWorker.js

└── test
```

### use
```
-V, --version              output the version number
-n, --new <name>           init project (初始化项目)
-p, --newpage <name>       add page to current dirname (在router目录下创建可用页面模板)
-c, --newcomponent <name>  add component to current dirname (在component目录下创建可用组建模板)
-h, --help                 output usage information
```


### 服务器与客户端同构

```
npm run build
npm run start:server
```
