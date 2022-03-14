import React, { useState } from "react";
import { Vector2 } from "../Core/Vector";
interface Props {
  visible: boolean;
  children: React.ReactNode;
}

export const Cursor = (props: Props) => {
  const [mousePos, setMousePos] = useState(new Vector2());
  return (
    <div
      onMouseMove={(e: any) => {
        setMousePos(new Vector2(e.clientX, e.clientY));
      }}
    >
      <img
        src="img/Pieces/000000/Pawn.png"
        alt="!"
        style={{
          position: "absolute",
          top: mousePos.y,
          left: mousePos.x,
          display: props.visible ? "initial" : "none",
        }}
      />
      {props.children}
    </div>
  );
};
