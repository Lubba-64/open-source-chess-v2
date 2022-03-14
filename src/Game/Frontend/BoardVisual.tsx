import React from "react";
import { Vector2 } from "../Core/Vector";
import { ChessLayout, PositionMetadata } from "../Logic/Layout";
import { pattern } from "./Patterns";
import { GetPositionFromIndex } from "../Core/MathFuncs";

export interface ChessBoardCellProps {
  position: Vector2;
  defaultColor: string;
  key: number;
  metadata?: PositionMetadata;
  debug?: boolean;
  unit: string;
}

export type ChessBoardVisualSizeProp = { size: Vector2; unit: string };

export interface ChessBoardVisualProps {
  pattern: pattern;
  layout: ChessLayout;
  backgroundColor: string;
  boardSize: ChessBoardVisualSizeProp;
  getCellGUI: (props: ChessBoardCellProps) => React.ReactNode;
  debug?: boolean;
}

export const BoardVisual = (props: ChessBoardVisualProps) => {
  let positions = [];
  for (let i = 0; i < props.layout.size.Area(); i++) positions.push(i);

  const pattern = (pos: Vector2) => {
    return props.pattern(pos, !pos.ContainedIn(props.layout.validPositions));
  };

  const metadata = (pos: Vector2) => {
    return props.layout.metadata[
      pos.IndexOf(props.layout.metadata.map((metadata) => metadata.position))
    ];
  };

  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        width: `${props.boardSize.size.x}${props.boardSize.unit}`,
        height: `${props.boardSize.size.y}${props.boardSize.unit}`,
        display: "grid",
        gridTemplateColumns: `repeat(${props.layout.size.y},1fr)`,
        gridTemplateRows: `repeat(${props.layout.size.x},1fr)`,
      }}
    >
      {positions.map((x) => {
        let currentPos = GetPositionFromIndex(x, props.layout.size);
        return props.getCellGUI({
          position: currentPos,
          defaultColor: pattern(currentPos),
          key: x,
          metadata: metadata(currentPos),
          debug: props.debug,
          unit: props.boardSize.unit,
        });
      })}
    </div>
  );
};
