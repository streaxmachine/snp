import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Camera({ scroll, ...props }) {
  //   const scroll = useScroll();

  const group = useRef();
  const { animations } = useGLTF("/snpOfficeCamera2.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => void (actions["Action.002"].play().paused = true), [actions]);
  useFrame((state, delta) => {
    const action = actions["Action.002"];

    action.time = action.getClip().duration * (scroll.offset % 1);

    // action.time = THREE.MathUtils.lerp(
    //   action.time,
    //   action.getClip().duration * scroll.offset,
    //   0.05
    // );
    // if (scroll.offset < 0) {
    //   action.reset();
    // }
    // if (action.time > 7) {
    //   action.time = 0;
    // }
    // actions["CameraAction.005"].time = THREE.MathUtils.lerp(actions["CameraAction.005"].time, actions["CameraAction.005"].getClip().duration * scroll.current, 0.05)
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Camera"
          position={[14.34, 2.63, -0.35]}
          rotation={[1.31, 0.13, -0.42]}
        >
          <PerspectiveCamera
            name="Camera_Orientation"
            makeDefault={true}
            far={100}
            near={0.1}
            fov={53.7}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/snpOfficeCamera.glb");
