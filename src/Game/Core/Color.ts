export type ColorRGBA = { r: number; g: number; b: number; a: number };
export type ColorRGB = { r: number; g: number; b: number };
export type Color = ColorRGB | ColorRGBA;
/** Converts the given color to a valid hex code */
export function toHexCode(color: ColorRGB | ColorRGBA): string {
  let numbers = [color.r, color.g, color.b];
  return `#${numbers.map((number: number) => number.toString(16))}`;
}
