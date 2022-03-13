import React from "react";
import { DefaultCellProps } from "./BoardVisual";

const getDebugCellID = (
  pos: number,
  shouldDebug: boolean | undefined,
  unit: string
) => {
  return shouldDebug ? (
    <p style={{ color: "grey", fontSize: `2${unit}` }}>{pos}</p>
  ) : (
    ""
  );
};

export const Cell = (props: DefaultCellProps) => {
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
    </div>
  );
};
