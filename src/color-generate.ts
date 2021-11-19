#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';

import { generate } from './generate';
import { generateFile } from './util';
import PackageJson from '../package.json';

const program = new Command();
const promps = [
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
  .version(PackageJson.version, '-v --version')
  .command('generate')
  .alias('g')
  .description('generate color steps')
  .option('-c --color <color>', 'just print color')
  .option('-f --file', 'generate file')
  .action((option) => {
    if (!option.color) {
      console.log(
        chalk.redBright(
          'color option is must\nif you want primary color #099dfd, you should write `color-generate g -c 099dfd`\nif you want generate file, you should write `color-generate g -c 099dfd -f`',
        ),
      );

      return;
    }

    const colors = generate(`#${option.color}`);

    if (!option.file) {
      console.log(chalk.blueBright(colors));

      return;
    }

    inquirer.prompt(promps).then((answers) => {
      switch (answers.cssPreProcessor) {
        case 'sass':
          generateFile(colors, 'color.scss');
          break;
        case 'less':
          generateFile(colors, 'color.less');
          break;
      }
    });
  });

program.command('*').action(() => {
  console.error('\nUnknown command');
  program.outputHelp();
});

program.parse(process.argv);
