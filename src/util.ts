import fs from 'fs';
import path from 'path';

export const generateFile = (colors: string[], template: string) => {
  try {
    let data = fs.readFileSync(path.resolve(__dirname, `../templates/${template}.tpl`), 'utf8');

    colors.map((color: string, index: number) => {
      data = data.replace(new RegExp(`\\\$\\\{colorPrimary${index}\\\}`, 'mg'), color);
    });

    fs.writeFileSync(`${process.cwd()}/${template}`, data);
  } catch (e) {
    console.error('generate file error: ', e);
  }
};
