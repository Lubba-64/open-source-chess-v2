import React from "react";
import { Vector2 } from "./Game/Core/Vector";
import { BoardVisual } from "./Game/Frontend/BoardVisual";
import { Cell } from "./Game/Frontend/Cell";
import { makeRectLayout } from "./Game/Logic/Layout";
function App() {
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
      <BoardVisual
        backgroundColor="#000000"
        layout={makeRectLayout(new Vector2(8, 8))}
        pattern={(position: Vector2, empty: boolean) => {
          let main =
            (position.x + position.y) % 2 === 0 ? "#000000" : "#ffffff";
          return empty ? "#345345" : main;
        }}
        boardSize={{ size: new Vector2(50, 50), unit: "vmin" }}
        getCellGUI={Cell}
      />
    </div>
  );
}

export default App;

/* eslint-disable */
const fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
