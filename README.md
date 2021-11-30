<h1 align="center">Color Generator</h1>
<p align="center">
   <a href="https://www.npmjs.com/package/color-generator"><img src="https://img.shields.io/github/license/Johnson-hd/color-generator?color=%231890FF&style=flat-square" alt="License"></a>
  <a href="https://www.npmjs.com/package/color-generator"><img src="https://img.shields.io/badge/node->=14.x-brightgreen.svg" alt="Version"></a>
  <a href="https://github.com/Johnson-hd/color-generator/releases/latest"><img src="https://img.shields.io/github/v/release/Johnson-hd/color-generator" alt="Latest release"></a>
  <a href="https://github.com/Johnson-hd/color-generator"><img src="https://img.shields.io/github/stars/Johnson-hd/color-generator?color=%231890FF&style=flat-square" alt="Stars"></a>
</p>

Referring to [`Ant Design`](https://ant.design/docs/spec/colors-cn), enter a primary color to generate color steps.

## Documentation

Docs are available at [`here`](https://color-generator-docs.sh2.agoralab.co)

## Demo

![Demo](https://web-cdn.agora.io/color-generator/static/show-cli.gif)

![Demo](https://web-cdn.agora.io/color-generator/static/show.gif)

## Installation

### CLI

```javascript
# npm
$ sudo npm install color-generator -g

# pnpm
$ pnpm add color-generator -g
```

### YARN | NPM | PNPM

```javascript
yarn add color-generator

npm install color-generator

pnpm add color-generator
```

### CDN

- **`unpkg`**
  - `https://unpkg.com/color-generator/dist/color-generator.umd.js`
  - `https://unpkg.com/color-generator/dist/color-generator.es.js`

- **`jsdelivr`**
  - `https://cdn.jsdelivr.net/npm/color-generator/dist/color-generator.umd.js`
  - `https://cdn.jsdelivr.net/npm/color-generator/dist/color-generator.es.js`

## Examples

### CLI

```bash
# help
$ color-generator -h

# just print color
$ color-generator g -c 099dfd

# generate file Sass/Less
$ color-generator g -c 099dfd -f
```

### Module

```javascript
import { generate } from 'color-generator'
```

### Broswer

```javascript
<script src="https://cdn.jsdelivr.net/npm/color-generator/dist/color-generator.umd.js"></script>

<script>
  // window mounts the `ColorGenerate`
  console.log("colors", ColorGenerate('#099dfd'));
</script>
```

## Links

- [Documentation](https://color-generator-docs.sh2.agoralab.co/#/)
- [ChangeLog](https://github.com/Johnson-hd/color-generator/blob/master/CHANGELOG.md)
- [Ant Design](https://ant.design/docs/spec/colors-cn)
