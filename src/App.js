import "./App.css";
import { Canvas } from "@react-three/fiber";
import Controls from "./Components/Controls";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import { Model } from "./Components/Model";
import SphereWireframe from "./Components/Sphere";
import { Monitors } from "./Components/Monitors";
import { Drone } from "./Components/Drone";
import PreloaderContainer from "./Components/Preloader/PreloaderContainer";
import SnpPicInfo from "./Components/SnpPicInfo";

function App() {
  return (
    <>
      <PreloaderContainer />
      <Canvas flat camera={{ fov: 30, position: [25, 5, 4] }}>
        <color args={["#2a2d6e"]} attach="background" />
        <Controls />
        <Suspense>
          <Drone />
          <Monitors />
          <Model />
          <Environment preset="city" />
        </Suspense>
        <SphereWireframe />
      </Canvas>
      <SnpPicInfo />
    </>
  );
}

export default App;

// return (
//   <group {...props} dispose={null}>
//     <group name="Scene">
//       <mesh
//         name="Floor"
//         castShadow
//         receiveShadow
//         geometry={nodes.Floor.geometry}
//         material={nodes.Floor.material}
//       >
//         <meshBasicMaterial map={bakedFloor} map-flipY={false} />
//       </mesh>
//       <mesh
//         name="Scene_1"
//         castShadow
//         receiveShadow
//         geometry={nodes.Scene_1.geometry}
//         material={nodes.Scene_1.material}
//         position={[3.05, 0, 6.52]}
//         rotation={[-Math.PI, 0, -Math.PI]}
//       >
//         <meshBasicMaterial map={bakedScene} map-flipY={false} />
//       </mesh>
//       <mesh
//         name="Sofa_Black"
//         castShadow
//         receiveShadow
//         geometry={nodes.Sofa_Black.geometry}
//         material={nodes.Sofa_Black.material}
//         position={[9.14, 0, -4.73]}
//       >
//         <meshStandardMaterial roughness={0.2} color="black" metalness={0.9} />
//       </mesh>
//       <mesh
//         name="Sofa_Leg"
//         castShadow
//         receiveShadow
//         geometry={nodes.Sofa_Leg.geometry}
//         material={nodes.Sofa_Leg.material}
//         position={[9.14, 0, -4.73]}
//       />
//       <mesh
//         name="Sofa_Pod"
//         castShadow
//         receiveShadow
//         geometry={nodes.Sofa_Pod.geometry}
//         material={nodes.Sofa_Pod.material}
//         position={[9.07, 0.84, -3.83]}
//         rotation={[0, 0, -1.29]}
//       >
//         <meshStandardMaterial roughness={0.9} color="gray" metalness={0.9} />
//       </mesh>
//       <mesh
//         name="Sofa_Table"
//         castShadow
//         receiveShadow
//         geometry={nodes.Sofa_Table.geometry}
//         material={nodes.Sofa_Table.material}
//         position={[12.31, -0.14, -4.86]}
//       >
//         <meshStandardMaterial roughness={0.2} color="white" />
//       </mesh>
//       <mesh ref={sphereRef} position={[12.31, 1.5, -4.86]}>
//         <sphereGeometry args={[0.8, 30, 30]} />
//         <meshStandardMaterial wireframe color="#07a8f2" roughness={0} />
//       </mesh>
//       <mesh
//         name="MonitorSoftBlue"
//         castShadow
//         receiveShadow
//         geometry={nodes.MonitorSoftBlue.geometry}
//         material={nodes.MonitorSoftBlue.material}
//         position={[12.97, 1.28, 5.68]}
//         rotation={[0, 0, -Math.PI / 2]}
//       />
//       <mesh
//         name="Display"
//         castShadow
//         receiveShadow
//         geometry={nodes.Display.geometry}
//         material={nodes.Display.material}
//         position={[12.97, 1.28, 5.68]}
//         rotation={[0, 0, -Math.PI / 2]}
//       >
//         <meshStandardMaterial roughness={0.2} color="black" />
//       </mesh>
//       <mesh
//         name="Monitor_Blue"
//         castShadow
//         receiveShadow
//         geometry={nodes.Monitor_Blue.geometry}
//         material={nodes.Monitor_Blue.material}
//         position={[-2.92, 1.28, -4.42]}
//         rotation={[-Math.PI, 1.28, Math.PI / 2]}
//       >
//         <meshStandardMaterial roughness={0.2} color="#07a8f2" />
//       </mesh>
//     </group>
//   </group>
// );
