import React from "react";
import { Vector2 } from "../Core/Vector";
import { ChessLayout } from "../Logic/Layout";
interface Props {
  pattern: (position: Vector2, empty: boolean) => string;
  layout: ChessLayout;
  backgroundColor: string;
  boardSize: { size: Vector2; unit: string };
  debugCellIDs?: boolean;
}

const GetPositionFromIndex = (position: number, size: Vector2) => {
  return new Vector2(position % size.x, Math.floor(position / size.y));
};

const getDebugCell = (pos: number, shouldDebug: boolean | undefined) => {
  return shouldDebug ? (
    <p style={{ color: "grey", fontSize: "2vmin" }}>{pos}</p>
  ) : (
    ""
  );
};

export const BoardVisual = (props: Props) => {
  let positions = [];
  for (let i = 0; i < props.layout.size.Area(); i++) positions.push(i);

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
        return (
          <div
            key={x}
            style={{
              backgroundColor: props.pattern(
                currentPos,
                currentPos.ContainedIn(
                  props.layout.pieces.map((meta) => meta.position)
                )
              ),
              minWidth: 0,
              minHeight: 0,
            }}
          >
            {getDebugCell(x, props.debugCellIDs)}
          </div>
        );
      })}
    </div>
  );
};
