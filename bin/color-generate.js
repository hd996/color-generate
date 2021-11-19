#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var inquirer_1 = __importDefault(require("inquirer"));
var chalk_1 = __importDefault(require("chalk"));
var generate_1 = require("./generate");
var util_1 = require("./util");
var package_json_1 = __importDefault(require("../package.json"));
var program = new commander_1.Command();
var promps = [
    {
        type: 'list',
        name: 'cssPreProcessor',
        message: 'Pick a CSS pre-processor',
        choices: [
            {
                name: 'Sass/SCSS',
                value: 'sass',
            },
            {
                name: 'Less',
                value: 'less',
            },
        ],
    },
];
program
    .version(package_json_1.default.version, '-v --version')
    .command('generate')
    .alias('g')
    .description('generate color steps')
    .option('-c --color <color>', 'just print color')
    .option('-f --file', 'generate file')
    .action(function (option) {
    if (!option.color) {
        console.log(chalk_1.default.redBright('color option is must\nif you want primary color #099dfd, you should write `color-generate g -c 099dfd`\nif you want generate file, you should write `color-generate g -c 099dfd -f`'));
        return;
    }
    var colors = (0, generate_1.generate)("#" + option.color);
    if (!option.file) {
        console.log(chalk_1.default.blueBright(colors));
        return;
    }
    inquirer_1.default.prompt(promps).then(function (answers) {
        switch (answers.cssPreProcessor) {
            case 'sass':
                (0, util_1.generateFile)(colors, 'color.scss');
                break;
            case 'less':
                (0, util_1.generateFile)(colors, 'color.less');
                break;
        }
    });
});
program.command('*').action(function () {
    console.error('\nUnknown command');
    program.outputHelp();
});
program.parse(process.argv);
