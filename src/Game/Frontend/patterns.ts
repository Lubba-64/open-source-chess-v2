import { Vector2 } from "../Core/Vector";

export type pattern = (
  position: Vector2,
  empty: boolean,
  colors?: any
) => string;

export const ClassicPattern = (
  position: Vector2,
  empty: boolean,
  colors?: { first: string; second: string; empty: string }
) => {
  let emptyColor = colors === undefined ? "grey" : colors["empty"];
  let first = colors === undefined ? "#c0934d" : colors["first"];
  let second = colors === undefined ? "#45301d" : colors["second"];

  let main = (position.x + position.y) % 2 === 0 ? first : second;
  return empty ? emptyColor : main;
};
