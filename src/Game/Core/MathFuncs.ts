import { Vector2 } from "./Vector";

// clamps a number between a and b
export function clampNumber(num: number, min: number, max: number): number {
  if (num > max) return max;
  if (num < min) return min;
  return num;
}

export const GetPositionFromIndex = (position: number, size: Vector2) => {
  return new Vector2(position % size.x, Math.floor(position / size.y));
};
