"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
var tinycolor2_1 = __importDefault(require("tinycolor2"));
var core_1 = require("./core");
var generate = function (primaryColor) {
    var colors = [];
    var hsv = (0, tinycolor2_1.default)(primaryColor).toHsv();
    // 主色前
    for (var i = core_1.topColorCount; i > 0; i -= 1) {
        var color = (0, tinycolor2_1.default)({
            h: (0, core_1.getHue)(hsv, i, true),
            s: (0, core_1.getSaturation)(hsv, i, true),
            v: (0, core_1.getValue)(hsv, i, true),
        }).toHexString();
        colors.push(color);
    }
    // 主色
    colors.push(primaryColor);
    // 主色后
    for (var i = 1; i <= core_1.behindColorCount; i += 1) {
        var color = (0, tinycolor2_1.default)({
            h: (0, core_1.getHue)(hsv, i),
            s: (0, core_1.getSaturation)(hsv, i),
            v: (0, core_1.getValue)(hsv, i),
        }).toHexString();
        colors.push(color);
    }
    return colors;
};
exports.generate = generate;
