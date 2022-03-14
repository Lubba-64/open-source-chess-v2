import React from "react";
import { BoardVisual, ChessBoardVisualSizeProp } from "./BoardVisual";
import { Cell } from "./Cell";
import { ChessLayout } from "../Logic/Layout";
import { ClassicPattern } from "./Patterns";
import { BoardControler } from "./BoardControler";

interface Props {
  size: ChessBoardVisualSizeProp;
  style?: React.CSSProperties;
  debug?: boolean;
  layout: ChessLayout;
}

export const ClassicChessBoard = (props: Props) => {
  return (
    <div style={props.style}>
      <BoardControler
        boardVisual={BoardVisual}
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
