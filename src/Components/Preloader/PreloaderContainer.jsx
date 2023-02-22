import React, { useState } from "react";
import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { Preloader } from "./Preloader";
import create from "zustand";

const PreloaderContainer = () => {
  const { active } = useProgress();
  const [experience, setExperience] = useState(false);

  useEffect(() => {
    console.log(active);
    if (active === false) {
      setTimeout(() => {
        setExperience(true);
      }, 2000);
    }
  }, [active]);

  const handleClick = () => {};

  return (
    <>
      <Preloader experience={experience} handleClick={handleClick} />
    </>
  );
};
export default PreloaderContainer;
