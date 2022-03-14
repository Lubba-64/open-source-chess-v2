import React, { useState } from "react";
import { ChessBoardVisualProps } from "./BoardVisual";
import { Cursor } from "./Cursor";

interface Props extends ChessBoardVisualProps {
  boardVisual: (props: ChessBoardVisualProps) => React.ReactElement;
}

export const BoardControler = (props: Props) => {
  const [OverElement, setOverElement] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setOverElement(true);
      }}
      onMouseLeave={() => {
        setOverElement(false);
      }}
    >
      <Cursor visible={OverElement}>{props.boardVisual({ ...props })}</Cursor>
    </div>
  );
};
