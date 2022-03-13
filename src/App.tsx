import React from "react";
import { Vector2 } from "./Game/Core/Vector";
import { ClassicBoardVisual } from "./Game/Frontend/ClassicChess";
import {
  CompilePieces,
  CompiledPiecesRecord,
} from "./Game/Logic/CompilePieces";
import { pieces } from "./Game/Logic/Pieces";
import { ChessLayout, makeRectLayout } from "./Game/Logic/Layout";

const gamePieces: CompiledPiecesRecord = CompilePieces(pieces, [
  { r: 255, g: 255, b: 255 },
  { r: 0, g: 0, b: 0 },
]);

const startingLayout: ChessLayout = {
  ...makeRectLayout(new Vector2(8, 8)),
  metadata: [{ position: new Vector2(0, 0), piece: gamePieces["Rook.000000"] }],
};

function App() {
  console.log(gamePieces);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <ClassicBoardVisual
        size={{ size: new Vector2(75, 75), unit: "vmin" }}
        style={{
          borderStyle: "solid",
          borderColor: "grey",
          borderWidth: "1vmin",
        }}
        debug
        layout={startingLayout}
      />
    </div>
  );
}

export default App;

/* eslint-disable */
const fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
