#!/usr/bin/env node

import { Command } from 'commander';

import { generate } from './generate';
import PackageJson from '../package.json';

const program = new Command();

program
  .version(PackageJson.version, '-v --version')
  .command('generate <color>')
  .alias('g')
  .description('generate color steps')
  .action((color: string) => {
    const colors = generate(color);

    console.log('colors', colors);
  });

program.command('*').action(() => {
  console.error('\nUnknown command');
  program.outputHelp();
});

program.parse(process.argv);
