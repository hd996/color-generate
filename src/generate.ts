import tinycolor from 'tinycolor2';

import { getHue, getSaturation, getValue, topColorCount, behindColorCount } from './core';

export const generate = (primaryColor: string): string[] => {
  const colors = [];
  const hsv = tinycolor(primaryColor).toHsv();

  // 主色前
  for (let i = topColorCount; i > 0; i -= 1) {
    const color = tinycolor({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true),
    }).toHexString();

    colors.push(color);
  }

  // 主色
  colors.push(primaryColor);

  // 主色后
  for (let i = 1; i <= behindColorCount; i += 1) {
    const color = tinycolor({
      h: getHue(hsv, i),
      s: getSaturation(hsv, i),
      v: getValue(hsv, i),
    }).toHexString();

    colors.push(color);
  }

  return colors;
};
