import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Preloader = (props) => {
  const { experience, handleClick } = props;
  const [loading, setLoading] = useState(true);

  const [animationClass, setAnimationClass] = useState(false);

  const loaderClass =
    "loader-container-starter" + (animationClass ? " animation" : "");

  const onHangleClick = () => {
    setAnimationClass(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  return (
    <>
      {loading ? (
        <>
          <div className={loaderClass}>
            <div className="spinner"></div>
            <div className="loader-text">SNP WORKSPACE IS LOADING...</div>
            {experience ? (
              <button style={{ marginTop: "50px" }} onClick={onHangleClick}>
                ENTER EXPERIENCE
              </button>
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );
};
