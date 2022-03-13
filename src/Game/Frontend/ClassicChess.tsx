import React from "react";
import { BoardVisual, boardVisualSizeProps } from "./BoardVisual";
import { Cell } from "./Cell";
import { ChessLayout } from "../Logic/Layout";
import { ClassicPattern } from "./patterns";

interface Props {
  size: boardVisualSizeProps;
  style?: React.CSSProperties;
  debug?: boolean;
  layout: ChessLayout;
}

export const ClassicBoardVisual = (props: Props) => {
  return (
    <div style={props.style}>
      <BoardVisual
        backgroundColor="#000000"
        layout={props.layout}
        pattern={ClassicPattern}
        boardSize={props.size}
        getCellGUI={Cell}
        debug={props.debug}
      />
    </div>
  );
};
