import React from "react";
import { useGLTF } from "@react-three/drei";

export function Monitors(props) {
  const { nodes, materials } = useGLTF("/snpMonitors.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Display.geometry}
        material={materials.Monitor}
        position={[12.97, 1.28, 5.68]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monitor.geometry}
        material={materials["Minotor leg"]}
        position={[12.97, 1.28, 5.68]}
        rotation={[0, 0, -Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("/snpMonitors.glb");
