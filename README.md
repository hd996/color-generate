# 主题色彩生成算法
> An awesome theme color generation scheme.

## 简介
参考 [`Ant Design`](https://ant.design/docs/spec/colors-cn) 色彩规范，输入一个主色，可以根据主色生成一系列的颜色阶梯，帮助前端和设计师更好地选色。

## CLI
```javascript
$ sudo npm install color-generate -g

// 查看帮助
$ color-generate -h

// 查看版本
$ color-generate -v

// 根据主色生成色阶
$ color-generate generate 099dfd 
```

## CDN
- 最新
  - `https://web-cdn.agora.io/color-generate/color-generate.umd.js`
  - `https://web-cdn.agora.io/color-generate/color-generate.es.js`

- 版本：`version` 替换为 `1.0.1` | `1.0.2` 等，可参考 [CHANGELOG](https://github.com/Johnson-hd/color-generate/blob/master/CHANGELOG.md)
  - `https://web-cdn.agora.io/color-generate/color-generate@{version}.umd.js`
  - `https://web-cdn.agora.io/color-generate/color-generate@{version}.es.js`

## NPM | YARN
```javascript
$ yarn add color-generate

$ import { generate } from 'color-generate'
```

## 浏览器
```javascript
<script src="https://web-cdn.agora.io/color-generate/color-generate.umd.js"></script>

<script>
  // 在全局挂载了 `ColorGenerate` 变量
  console.log("colors", ColorGenerate('#099dfd'));
</script>
```

## 相关链接
- [更新日志](https://github.com/Johnson-hd/color-generate/blob/master/CHANGELOG.md)
- [官网](https://color-generate-docs.sh2.agoralab.co/#/)
- [Ant Design](https://ant.design/docs/spec/colors-cn)