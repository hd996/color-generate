# 主题色彩生成算法
> An awesome theme color generation scheme.

## 简介
参考 [`Ant Design`](https://ant.design/docs/spec/colors-cn) 色彩规范，输入一个主色，可以根据主色生成一系列的颜色阶梯，帮助前端和设计师更好地选色。

## 安装
- `CDN` : `version` 字段替换为 `1.0.0` | `1.0.1` 等，版本信息可以见[官网](https://colors-docs.sh2.agoralab.co/#/)
  - `https://web-cdn.agora.io/color-generate/color-generate@version.es.js`
  - `https://web-cdn.agora.io/color-generate/color-generate@version.umd.js`

- `NPM` : 
  - `npm install color-generate --save -dev`
  - `yarn add color-generate --dev`
## 使用
- `ESM`
```javascript
// 可参考demo-esm.html
<script type="module">
  // import { generate } from 'https://web-cdn.agora.io/color-generate/color-generate@1.0.0.es.js';
  import { generate } from 'color-generate';

  // ['#e6f9ff', '#ade9ff', '#85daff', '#5cc9ff', '#33b4ff', '#099dfd', '#0079d6', '#005eb0', '#00458a', '#002e63']
  console.log("colors", generate('#099dfd'));
</script>
```

- `UMD - Browser`
```javascript
// 可参考demo-umd.html
<script src="https://web-cdn.agora.io/color-generate/color-generate@1.0.0.umd.js"></script>
<script>
  // ['#e6f9ff', '#ade9ff', '#85daff', '#5cc9ff', '#33b4ff', '#099dfd', '#0079d6', '#005eb0', '#00458a', '#002e63']
  console.log("colors", ColorsGenerate('#099dfd'));
</script>
```

- `UMD - Commonjs`
```javascript
const { generate }  = require('color-generate');

// ['#e6f9ff', '#ade9ff', '#85daff', '#5cc9ff', '#33b4ff', '#099dfd', '#0079d6', '#005eb0', '#00458a', '#002e63']
console.log("colors", generate('#099dfd'));
```

## 本地调试
```bash
yarn install
yarn start:example
```

打开 `http://localhost:3000` 查看

## 相关链接
- [更新日志](https://github.com/Johnson-hd/color-generate/blob/master/CHANGELOG.md)
- [官网](https://colors-docs.sh2.agoralab.co/#/)
- [Ant Design](https://ant.design/docs/spec/colors-cn)