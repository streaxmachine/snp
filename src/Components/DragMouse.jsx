import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export const DragMouse = () => {
  const dragInfo = useSelector((s) => s.dragInfo);

  return (
    <>
      {!dragInfo && (
        <div className="move-mouse">
          <div className="move-mouse-text">Drag your mouse please</div>
        </div>
      )}
    </>
  );
};
