import React from "react";
import { ChessBoardVisualProps } from "./BoardVisual";
import { BoxedCursor } from "./BoxedCursor";

interface Props extends ChessBoardVisualProps {
  boardVisual: (props: ChessBoardVisualProps) => React.ReactElement;
}

export const BoardControler = (props: Props) => {
  return <BoxedCursor>{props.boardVisual({ ...props })}</BoxedCursor>;
};
