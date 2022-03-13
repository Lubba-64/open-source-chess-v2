// clamps a number between a and b
export function clampNumber(num: number, min: number, max: number): number {
  if (num > max) return max;
  if (num < min) return min;
  return num;
}
