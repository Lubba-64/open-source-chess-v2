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
  let emptyColor = colors === undefined ? "#345345" : colors["empty"];
  let first = colors === undefined ? "white" : colors["first"];
  let second = colors === undefined ? "black" : colors["second"];

  let main = (position.x + position.y) % 2 === 0 ? first : second;
  return empty ? emptyColor : main;
};
