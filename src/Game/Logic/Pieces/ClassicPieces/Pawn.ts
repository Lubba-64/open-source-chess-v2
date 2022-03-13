import { BlockType, Piece } from "../../Piece";

export const Pawn: Piece = {
  blockType: BlockType.Capture,
  getAttacks: () => {},
  getPositions: () => {},
  name: "Pawn",
};
