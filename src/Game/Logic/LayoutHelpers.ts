import { Iteration } from "../Core/Iteration";
import { Vector2 } from "../Core/Vector";
import { CompiledPiecesRecord } from "./CompilePieces";
import { PositionMetadata } from "./Layout";

export const PieceRow = (
  pieceNames: string[],
  y: number,
  coloredPieces: CompiledPiecesRecord
): PositionMetadata[] => {
  return new Iteration(pieceNames.length).Iterate().map((x) => {
    return { position: new Vector2(x, y), piece: coloredPieces[pieceNames[x]] };
  });
};

export const AddColor = (pieces: string[], color: string) => {
  return pieces.map((x) => x + "." + color);
};
