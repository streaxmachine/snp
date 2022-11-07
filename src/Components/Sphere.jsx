import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const SphereWireframe = () => {
  const sphereRef = useRef();
  useFrame((state) => {
    const angle = state.clock.elapsedTime;
    sphereRef.current.position.y = Math.cos(angle) * 0.5 + 1.9;
    sphereRef.current.rotation.y = angle;
    sphereRef.current.scale.set(1, Math.cos(angle), 1);
  });

  return (
    <mesh ref={sphereRef} position={[12.31, 1.5, -4.86]}>
      <sphereGeometry args={[0.6, 30, 30]} />
      <meshStandardMaterial wireframe color="#07a8f2" roughness={0} />
    </mesh>
  );
};

export default SphereWireframe;
