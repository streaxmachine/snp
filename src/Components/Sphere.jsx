import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const SphereWireframe = () => {
  const sphereRef = useRef();
  useFrame((state) => {
    const angle = state.clock.elapsedTime;
    sphereRef.current.position.y = Math.cos(angle) * 0.5 + 1.9;
    sphereRef.current.rotation.y = angle;
    sphereRef.current.scale.set(1, Math.cos(angle), 1);
  });

  return (
    <>
      <mesh ref={sphereRef} position={[12.31, 1.5, -4.86]}>
        <sphereGeometry args={[0.6, 30, 30]} />
        <meshStandardMaterial
          wireframe
          color="#07a8f2"
          roughness={0}
          envMapIntensity={10}
        />
      </mesh>
      <Html
        zIndexRange={[0, 0]}
        center
        distanceFactor={12}
        position={[-15, 4.8, -2.5]}
      >
        <div
          className="label-3d"
          // onClick={() => handleClick(true, false)}
        ></div>
      </Html>
    </>
  );
};

export default SphereWireframe;
