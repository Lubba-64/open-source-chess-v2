import { Vector2 } from "../Core/Vector";
import { Piece } from "./Piece";

export interface PositionMetadata {
  piece: Piece;
  position: Vector2;
}

export interface ChessLayout {
  size: Vector2;
  metadata: PositionMetadata[];
  validPositions: Vector2[];
}

export function makeRectLayout(size: Vector2): ChessLayout {
  let layout: ChessLayout = { validPositions: [], metadata: [], size: size };
  for (let x = 0; x < size.x; x++) {
    for (let y = 0; y < size.y; y++) {
      layout.validPositions.push(new Vector2(x, y));
    }
  }
  return layout;
}

export function layoutHasPosition(position: Vector2, layout: ChessLayout) {
  return position.ContainedIn(layout.validPositions);
}

export function setLayoutPosition(piece: Vector2, layout: ChessLayout) {}
