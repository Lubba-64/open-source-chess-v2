import { Color } from "../Core/Color";

export enum BlockType {
  Line,
  Capture,
  None,
}

export type PosFunc = (args: any) => void;

export interface Piece {
  name: string;
  blockType: BlockType;
  getPositions: PosFunc;
  getAttacks: PosFunc;
}

export interface ColoredPiece {
  imgPath: string;
  color: Color;
  piece: Piece;
}
