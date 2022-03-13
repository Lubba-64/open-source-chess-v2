// a general purpose class for 2d vectors (X,Y)

import { clampNumber } from "./MathFuncs";

export type NullableVector2 = Vector2 | null;
export class Vector2 {
  x: number;
  y: number;
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }
  // takes a vector in and outputs the vector rounded to -1, 0, or 1 (very small use case but its good for some specific circumstances)
  IntNormalize(): Vector2 {
    return new Vector2(
      this.x === 0 ? 0 : this.x > 0 ? 1 : -1,
      this.y === 0 ? 0 : this.y > 0 ? 1 : -1
    );
  }
  // quickly checks if two vectors are equal
  Equal(vec: Vector2): boolean {
    return this.x === vec.x && this.y === vec.y;
  }
  // does this list of vectors contain this vector?
  ContainedIn(list: Vector2[]): boolean {
    let contains = false;
    list.forEach((pos) => {
      if (this.Equal(pos)) {
        contains = true;
      }
    });
    return contains;
  }
  // adds two vectors
  Add(vec: Vector2): Vector2 {
    return new Vector2(vec.x + this.x, vec.y + this.y);
  }
  // adds a vector to this vector
  AddSelf(vec: Vector2): void {
    this.x += vec.x;
    this.y += vec.y;
  }
  // subtracts two vectors
  Subtract(vec: Vector2): Vector2 {
    return new Vector2(vec.x - this.x, vec.y - this.y);
  }
  // subtracts a vector from this vector
  SubtractSelf(vec: Vector2): void {
    this.x -= vec.x;
    this.y -= vec.y;
  }
  // multiplies two vectors
  Multiply(vec: Vector2): Vector2 {
    return new Vector2(this.x * vec.x, this.y * vec.y);
  }
  // multiplies with a single number instead of a vector
  MultiplyNum(num: number): Vector2 {
    return new Vector2(this.x * num, this.y * num);
  }
  //Gets the total area of the vector
  Area() {
    return this.x * this.y;
  }
  // multiplies two vectors
  Divide(vec: Vector2): Vector2 {
    return new Vector2(this.x / vec.x, this.y / vec.y);
  }
  // multiplies with a single number instead of a vector
  DivideNum(num: number): Vector2 {
    return new Vector2(this.x / num, this.y / num);
  }
  ToString(includeclass: boolean = true): string {
    if (includeclass) {
      return `Vector2:(${this.x},${this.y})`;
    } else {
      return `(${this.x},${this.y})`;
    }
  }
  ClampBoth(min: number, max: number): Vector2 {
    return new Vector2(
      clampNumber(this.x, min, max),
      clampNumber(this.y, min, max)
    );
  }
  Clamp(minX: number, maxX: number, minY: number, maxY: number): Vector2 {
    return new Vector2(
      clampNumber(this.x, minX, maxX),
      clampNumber(this.y, minY, maxY)
    );
  }
  // directional constants
  static zero: Vector2 = new Vector2(0, 0);
  static down: Vector2 = new Vector2(0, -1);
  static left: Vector2 = new Vector2(-1, 0);
  static right: Vector2 = new Vector2(1, 0);
  static up: Vector2 = new Vector2(0, 1);
  static downLeft: Vector2 = new Vector2(-1, -1);
  static downRight: Vector2 = new Vector2(1, -1);
  static upLeft: Vector2 = new Vector2(-1, 1);
  static upRight: Vector2 = new Vector2(1, 1);
  // direction collection constants
  static Cardianls: Vector2[] = [
    Vector2.up,
    Vector2.down,
    Vector2.left,
    Vector2.right,
  ];
  static Diagonals: Vector2[] = [
    Vector2.upRight,
    Vector2.upLeft,
    Vector2.downRight,
    Vector2.downLeft,
  ];
  static CardinalsAndDiagonals: Vector2[] = [
    Vector2.up,
    Vector2.down,
    Vector2.left,
    Vector2.right,
    Vector2.upRight,
    Vector2.upLeft,
    Vector2.downRight,
    Vector2.downLeft,
  ];
}
