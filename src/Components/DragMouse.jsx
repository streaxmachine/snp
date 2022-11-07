import React from "react";
import { useState } from "react";

export const DragMouse = () => {
  const [dragging, setDragging] = useState(true);

  return (
    <>
      {dragging && (
        <div className="move-mouse" onClick={() => setDragging(false)}>
          <div className="move-mouse-text">Drag your mouse please</div>
        </div>
      )}
    </>
  );
};
