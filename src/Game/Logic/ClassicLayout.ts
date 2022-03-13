import { Iteration } from "../Core/Iteration";
import { Vector2 } from "../Core/Vector";
import { CompileClassicPieces } from "./CompilePieces";
import { ChessLayout, makeRectLayout } from "./Layout";
import { AddColor, PieceRow } from "./LayoutHelpers";

export const classicPieces = CompileClassicPieces();

export const BackRow = [
  "Rook",
  "Knight",
  "Bishop",
  "Queen",
  "King",
  "Bishop",
  "Knight",
  "Rook",
];

export const startingLayout: ChessLayout = {
  ...makeRectLayout(new Vector2(8, 8)),
  metadata: [
    ...PieceRow(AddColor(BackRow, "ffffff"), 0, classicPieces),
    ...PieceRow(new Iteration(8, "Pawn.ffffff").Repeat(), 1, classicPieces),
    ...PieceRow(AddColor(BackRow, "000000"), 7, classicPieces),
    ...PieceRow(new Iteration(8, "Pawn.000000").Repeat(), 6, classicPieces),
  ],
};
