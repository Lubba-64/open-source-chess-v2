import { Color, toHexCode } from "../Core/Color";
import { ColoredPiece, Piece } from "./Piece";
import { pieces } from "./Pieces";

export type CompiledPiecesRecord = Record<string, ColoredPiece>;

export const CompilePieces = (
  rawPieces: Piece[],
  colors: Color[],
  imageExtension?: string
): CompiledPiecesRecord => {
  let ext = imageExtension ?? "png";
  let result: CompiledPiecesRecord = {};
  for (let c = 0; c < colors.length; c++) {
    for (let p = 0; p < rawPieces.length; p++) {
      let color = toHexCode(colors[c]).slice(1);
      let path = `img/Pieces/${color}/${rawPieces[p].name}.${ext}`;
      let name = `${rawPieces[p].name}.${color}`;
      result[name] = {
        piece: rawPieces[p],
        color: colors[c],
        imgPath: path,
      };
    }
  }

  return result;
};

export const CompileClassicPieces = () => {
  return CompilePieces(pieces, [
    { r: 255, g: 255, b: 255 },
    { r: 0, g: 0, b: 0 },
  ]);
};
