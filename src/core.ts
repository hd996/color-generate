interface HSV {
  h: number;
  s: number;
  v: number;
}

// 颜色从1-10，主色为第6个，前面有5个浅色，后面有4个深色
export const hueStep = 2; // 色相阶梯

export const topColorCount = 5; // 主色前数量，浅色部分
export const behindColorCount = 4; // 主色后数量，深色部分

export const topSaturationStep = 0.16; // 饱和度阶梯，主色前(浅色部分)
export const behindSaturationStep = 0.05; // 饱和度阶梯，主色后(深色部分)

export const topBrightnessLightStep = 0.05; // 亮度阶梯，主色前(浅色部分)
export const behindBrightnessStep = 0.15; // 亮度阶梯，主色后(深色部分)

/**
 * 获取色相
 * @param hsv 主色hsv
 * @param i index
 * @param isTop 是否为主色前，主色前为浅色
 * @returns 色相
 */
export const getHue = (hsv: HSV, i: number, isTop?: boolean): number => {
  let hue: number;

  // H: [60, 240]为暖色调，其他为冷色调
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    // 主色为冷色调
    // 1-10色相变化 => 色相从小到大 => 色相逆时针旋转 => 更冷
    hue = isTop ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    // 主色为暖色调
    // 1-10色相变化 => 色相从大到小 => 色相顺时针旋转 => 更暖
    hue = isTop ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  (hue < 0 || hue >= 360) && (hue = Math.abs(Math.abs(hue) - 360));

  return hue;
};

/**
 * 获取饱和度
 * 1-10饱和度变化 => 饱和度从小到大
 * @param hsv 主色hsv
 * @param i index
 * @param isTop 是否为主色前，主色前为浅色
 * @returns 饱和度
 */
export const getSaturation = (hsv: HSV, i: number, isTop?: boolean): number => {
  // 不改变灰色的饱和度
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  let saturation: number = isTop ? hsv.s - topSaturationStep * i : hsv.s + behindSaturationStep * i;

  saturation > 1 && (saturation = 1);
  saturation < 0.06 && (saturation = 0.06);

  // 主色前1个饱和度限制在 0.06-0.1 之间
  if (isTop && i === topColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  return Number(saturation.toFixed(2));
};

/**
 * 获取明度
 * HSV中V控制纯色中混入黑色的量，量越大，黑色越少，明度越高
 * 1-10明度变化 => 明度从大到小 => 明度越来越小
 * @param hsv 主色hsv
 * @param i index
 * @param isTop 是否为主色前，主色前为浅色
 * @returns 明度
 */
export const getValue = (hsv: HSV, i: number, isTop?: boolean): number => {
  let value: number;

  value = isTop ? hsv.v + topBrightnessLightStep * i : hsv.v - behindBrightnessStep * i;

  value > 1 && (value = 1);

  return Number(value.toFixed(2));
};
