import { BlockType, Piece } from "../Piece";

export const None: Piece = {
  blockType: BlockType.None,
  getAttacks: () => {},
  getPositions: () => {},
  name: "None",
};
