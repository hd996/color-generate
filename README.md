<h1 align="center">主题色彩生成算法</h1>
<p align="center">
   <a href="https://www.npmjs.com/package/color-generate"><img src="https://img.shields.io/github/license/Johnson-hd/color-generate?color=%231890FF&style=flat-square" alt="License"></a>
  <a href="https://www.npmjs.com/package/color-generate"><img src="https://img.shields.io/badge/node->=12.x-brightgreen.svg" alt="Version"></a>
  <a href="https://github.com/Johnson-hd/color-generate/releases/latest"><img src="https://img.shields.io/github/v/release/Johnson-hd/color-generate" alt="Latest release"></a>
  <a href="https://github.com/Johnson-hd/color-generate"><img src="https://img.shields.io/github/stars/Johnson-hd/color-generate?color=%231890FF&style=flat-square" alt="Stars"></a>
</p>

## 简介
参考 [`Ant Design`](https://ant.design/docs/spec/colors-cn) 色彩规范，输入一个主色，可以根据主色生成一系列的颜色阶梯，帮助前端和设计师更好地选色。

## 展示
![UI展示](https://web-cdn.agora.io/color-generate/static/show.gif)

## 使用
### CLI
```javascript
$ sudo npm install color-generate -g

// 查看帮助
$ color-generate -h

// 查看版本
$ color-generate -v

// 根据主色生成色阶
$ color-generate generate 099dfd 
```

### CDN
- **`unpkg`**
  - `https://unpkg.com/color-generate/dist/color-generate.umd.js`
  - `https://unpkg.com/color-generate/dist/color-generate.es.js`
- **`jsdelivr`**
  - `https://cdn.jsdelivr.net/npm/color-generate/dist/color-generate.umd.js`
  - `https://cdn.jsdelivr.net/npm/color-generate/dist/color-generate.es.js`

### NPM | YARN
```javascript
$ yarn add color-generate

$ import { generate } from 'color-generate'
```

### 浏览器
```javascript
<script src="https://cdn.jsdelivr.net/npm/color-generate/dist/color-generate.umd.js"></script>

<script>
  // 在全局挂载了 `ColorGenerate` 变量
  console.log("colors", ColorGenerate('#099dfd'));
</script>
```

### 相关链接
- [更新日志](https://github.com/Johnson-hd/color-generate/blob/master/CHANGELOG.md)
- [官网](https://color-generate-docs.sh2.agoralab.co/#/)
- [Ant Design](https://ant.design/docs/spec/colors-cn)