<!--
 * @Author: 姜彦汐
 * @Date: 2021-04-22 09:09:24
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-04-22 09:53:38
 * @Description: 
 * Contact: jiangyanxi@live.com
 * @FilePath: /egg-tencentcloud/README.md
-->
# egg-tencentcloud
## 安装

```bash
$ npm i egg-tencentcloud --save
# or
$ yarn add egg-tencentcloud
```

## 依赖说明

### 依赖的 egg 版本

egg 2.x | egg 1.x
--- | ---
😁 | ❌

### 依赖的插件

[tencentcloud-sdk-nodejs](https://github.com/tencentcloud/tencentcloud-sdk-nodejs)

[cos-nodejs-sdk-v5](https://github.com/tencentyun/cos-nodejs-sdk-v5)

[tls-sig-api-v2](https://github.com/tencentyun/tls-sig-api-v2-node)

## 开启插件

```js
// {app_root}/config/plugin.js
exports.tencentcloud = {
  enable: true,
  package: 'egg-tencentcloud',
};
```

## 配置

```js
// {app_root}/config/config.default.js
config.tencentcloud = {

};
```
## License

[MIT](LICENSE)