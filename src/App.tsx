import React from "react";
import { Vector2 } from "./Game/Core/Vector";
import { ClassicChessBoard } from "./Game/Frontend/ClassicChess";
import { startingLayout } from "./Game/Logic/ClassicLayout";

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
      <ClassicChessBoard
        size={{ size: new Vector2(75, 75), unit: "vmin" }}
        style={{
          borderStyle: "solid",
          borderColor: "#f0dea8",
          borderWidth: "1vmin",
        }}
        layout={startingLayout}
      />
    </div>
  );
}

export default App;

/* eslint-disable */
const fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
