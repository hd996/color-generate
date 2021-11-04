"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var generate_1 = require("./generate");
var package_json_1 = __importDefault(require("../package.json"));
var program = new commander_1.Command();
program
    .version(package_json_1.default.version, '-v --version')
    .command('generate <color>')
    .alias('g')
    .description('generate color steps')
    .action(function (color) {
    var colors = (0, generate_1.generate)(color);
    console.log('colors', colors);
});
program.command('*').action(function () {
    console.error('\nUnknown command');
    program.outputHelp();
});
program.parse(process.argv);
