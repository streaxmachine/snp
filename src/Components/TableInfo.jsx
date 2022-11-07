import React from "react";
import { useState } from "react";

export const TableInfo = () => {
  const [hover, setHover] = useState(false);

  return (
    <>
      {}
      <div
        className="label-3d"
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        {hover && <div className="chill-place">Chill place</div>}
      </div>
    </>
  );
};
