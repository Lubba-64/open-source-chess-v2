import React from "react";
import { Vector2 } from "./Game/Core/Vector";
import { ClassicBoardVisual } from "./Game/Frontend/ClassicChess";
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
      <ClassicBoardVisual
        size={{ size: new Vector2(50, 50), unit: "vmin" }}
        style={{
          borderStyle: "solid",
          borderColor: "grey",
          borderWidth: "1vmin",
        }}
        debug
      />
    </div>
  );
}

export default App;

/* eslint-disable */
const fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
