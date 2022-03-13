import React from "react";
import { Vector2 } from "../Core/Vector";
import { BoardVisual, boardVisualSizeProps } from "./BoardVisual";
import { Cell } from "./Cell";
import { makeRectLayout } from "../Logic/Layout";
import { ClassicPattern } from "./patterns";

interface Props {
  size: boardVisualSizeProps;
  style?: React.CSSProperties;
  debug?: boolean;
}

export const ClassicBoardVisual = (props: Props) => {
  return (
    <div style={props.style}>
      <BoardVisual
        backgroundColor="#000000"
        layout={makeRectLayout(new Vector2(8, 8))}
        pattern={ClassicPattern}
        boardSize={props.size}
        getCellGUI={Cell}
        debug={props.debug}
      />
    </div>
  );
};
