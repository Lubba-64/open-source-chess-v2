import React, { useState } from "react";
import { Cursor } from "./Cursor";

interface Props {
  children: React.ReactChild;
}

export const BoxedCursor = (props: Props) => {
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
      <Cursor visible={OverElement}>{props.children}</Cursor>
    </div>
  );
};
