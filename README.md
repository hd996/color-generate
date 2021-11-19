<h1 align="center">Color Generate</h1>
<p align="center">
   <a href="https://www.npmjs.com/package/color-generate"><img src="https://img.shields.io/github/license/Johnson-hd/color-generate?color=%231890FF&style=flat-square" alt="License"></a>
  <a href="https://www.npmjs.com/package/color-generate"><img src="https://img.shields.io/badge/node->=14.x-brightgreen.svg" alt="Version"></a>
  <a href="https://github.com/Johnson-hd/color-generate/releases/latest"><img src="https://img.shields.io/github/v/release/Johnson-hd/color-generate" alt="Latest release"></a>
  <a href="https://github.com/Johnson-hd/color-generate"><img src="https://img.shields.io/github/stars/Johnson-hd/color-generate?color=%231890FF&style=flat-square" alt="Stars"></a>
</p>

Referring to [`Ant Design`](https://ant.design/docs/spec/colors-cn), enter a primary color to generate color steps.

## Documentation
Docs are available at [here](`https://color-generate-docs.sh2.agoralab.co/#/`)

## Demo
![Demo](https://web-cdn.agora.io/color-generate/static/show.gif)

## Installation
### CLI
```javascript
$ sudo npm install color-generate -g
```

### YARN | NPM
```javascript
$ yarn add color-generate
$ npm install color-generate
```

### CDN
- **`unpkg`**
  - `https://unpkg.com/color-generate/dist/color-generate.umd.js`
  - `https://unpkg.com/color-generate/dist/color-generate.es.js`
- **`jsdelivr`**
  - `https://cdn.jsdelivr.net/npm/color-generate/dist/color-generate.umd.js`
  - `https://cdn.jsdelivr.net/npm/color-generate/dist/color-generate.es.js`


## Examples

### CLI
```bash
$ color-generate -h
$ color-generate -v
# just print color
$ color-generate g -c 099dfd
# generate file Sass/Less
$ color-generate g -c 099dfd -f
```
### Module
```javascript
$ import { generate } from 'color-generate'
```

### Broswer
```javascript
<script src="https://cdn.jsdelivr.net/npm/color-generate/dist/color-generate.umd.js"></script>

<script>
  // window mounts the `ColorGenerate`
  console.log("colors", ColorGenerate('#099dfd'));
</script>
```

## Links
- [Documentation](https://color-generate-docs.sh2.agoralab.co/#/)
- [ChangeLog](https://github.com/Johnson-hd/color-generate/blob/master/CHANGELOG.md)
- [Ant Design](https://ant.design/docs/spec/colors-cn)