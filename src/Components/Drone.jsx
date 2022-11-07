import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";

export function Drone(props) {
  const propellerRef = useRef();
  const propellerRef1 = useRef();
  const propellerRef2 = useRef();
  const propellerRef3 = useRef();
  const droneRef = useRef();

  const { mouse } = useThree();

  useFrame((state, delta) => {
    const angle = state.clock.elapsedTime;

    propellerRef.current.rotation.y += delta * 12;
    propellerRef1.current.rotation.y += delta * 12;
    propellerRef2.current.rotation.y += delta * 12;
    propellerRef3.current.rotation.y += delta * 12;
    droneRef.current.position.z = Math.cos(angle);
    droneRef.current.rotation.y = Math.cos(angle);

    gsap.to(droneRef.current.position, {
      y: mouse.y + 1.5,
      duration: 5,
    });
  });

  const { nodes, materials } = useGLTF("/drone.glb");
  return (
    <group {...props} dispose={null} scale={[3, 3, 3]}>
      <group
        position={[1, 1.5, -1.37]}
        rotation={[Math.PI / 2, 0.5, 0]}
        ref={droneRef}
      >
        <mesh
          ref={propellerRef}
          castShadow
          receiveShadow
          geometry={nodes.propeller005.geometry}
          material={nodes.propeller005.material}
          position={[0.15, -0.11, -0.04]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          ref={propellerRef1}
          castShadow
          receiveShadow
          geometry={nodes.propeller008.geometry}
          material={nodes.propeller008.material}
          position={[-0.11, 0.12, -0.04]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          ref={propellerRef2}
          castShadow
          receiveShadow
          geometry={nodes.propeller006.geometry}
          material={nodes.propeller006.material}
          position={[0.15, 0.12, -0.04]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          ref={propellerRef3}
          castShadow
          receiveShadow
          geometry={nodes.propeller007.geometry}
          material={nodes.propeller007.material}
          position={[-0.1, -0.12, -0.04]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rotorCenter004.geometry}
          material={nodes.rotorCenter004.material}
          position={[0.15, -0.11, -0.03]}
          rotation={[0, 0, 1.13]}
        ></mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/drone.glb");
