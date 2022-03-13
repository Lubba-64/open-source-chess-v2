export type Color = { r: number; g: number; b: number; a?: number };
/** Converts the given color to a valid hex code */
export function toHexCode(color: Color): string {
  let numbers = [color.r, color.g, color.b];

  const toHex = (n: number) => {
    let amount = n.toString(16);
    return amount.length === 2 ? amount : `0${amount}`;
  };

  return `#${numbers.map(toHex).join("")}`;
}

export function ColorEQ(a: Color, b: Color) {
  let alpha_check = true;
  if (a.a !== undefined && b.a !== undefined) alpha_check = a.a === b.a;
  return a.r === b.r && a.g === b.g && a.b === b.b && alpha_check;
}

export const Clear: Color = { r: 0, g: 0, b: 0, a: 0 };
export const Black: Color = { r: 0, g: 0, b: 0, a: 255 };
export const White: Color = { r: 255, g: 255, b: 255, a: 255 };
