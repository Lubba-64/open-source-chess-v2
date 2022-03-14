import React from "react";
import { ChessBoardCellProps } from "./BoardVisual";

const getDebugCellID = (
  pos: number,
  shouldDebug: boolean | undefined,
  unit: string
) => {
  return shouldDebug ? (
    <p style={{ color: "red", fontSize: `2${unit}` }}>{pos}</p>
  ) : (
    ""
  );
};

export const Cell = (props: ChessBoardCellProps) => {
  let cellContents;
  if (props.metadata !== undefined) {
    cellContents = (
      <img
        src={props.metadata.piece.imgPath}
        alt="!"
        style={{ width: "75%", height: "75%" }}
      />
    );
  }
  return (
    <div
      style={{
        minWidth: 0,
        minHeight: 0,
        backgroundColor: props.defaultColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      key={props.key}
    >
      {props.debug ? getDebugCellID(props.key, props.debug, props.unit) : ""}
      {cellContents ?? ""}
    </div>
  );
};
