"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFile = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var generateFile = function (colors, template) {
    try {
        var data_1 = fs_1.default.readFileSync(path_1.default.resolve(__dirname, "../templates/" + template + ".tpl"), 'utf8');
        colors.map(function (color, index) {
            data_1 = data_1.replace(new RegExp("\\$\\{colorPrimary" + index + "\\}", 'mg'), color);
        });
        fs_1.default.writeFileSync(process.cwd() + "/" + template, data_1);
    }
    catch (e) {
        console.error('generate file error: ', e);
    }
};
exports.generateFile = generateFile;
