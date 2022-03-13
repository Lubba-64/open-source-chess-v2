import React from "react";
import { Vector2 } from "../Core/Vector";
import { ChessLayout, PositionMetadata } from "../Logic/Layout";
import { pattern } from "./patterns";

export interface DefaultCellProps {
  position: Vector2;
  defaultColor: string;
  key: number;
  metadata?: PositionMetadata;
  debug?: boolean;
  unit: string;
}

export type boardVisualSizeProps = { size: Vector2; unit: string };

interface Props {
  pattern: pattern;
  layout: ChessLayout;
  backgroundColor: string;
  boardSize: boardVisualSizeProps;
  getCellGUI: (props: DefaultCellProps) => React.ReactNode;
  debug?: boolean;
}

const GetPositionFromIndex = (position: number, size: Vector2) => {
  return new Vector2(position % size.x, Math.floor(position / size.y));
};

export const BoardVisual = (props: Props) => {
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
