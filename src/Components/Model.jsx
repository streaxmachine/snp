import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, Html } from "@react-three/drei";
import { useDispatch } from "react-redux";
import { setSnpShowInfo } from "../redux/actions";

function Model(props) {
  const dispatch = useDispatch();
  const bakedFloor = useTexture("/BakedFloorWallsGood2.jpg");
  const bakedScene = useTexture("/BakedScene.002.jpg");
  const { nodes, materials } = useGLTF("/snpoffice9.glb");

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Floor"
          castShadow
          receiveShadow
          geometry={nodes.Floor.geometry}
          material={nodes.Floor.material}
        >
          <meshBasicMaterial map={bakedFloor} map-flipY={false} />
        </mesh>
        <Html
          zIndexRange={[0, 0]}
          center
          distanceFactor={12}
          position={[-15, 4.8, -2.5]}
        >
          <div
            className="label-3d"
            onClick={() => dispatch(setSnpShowInfo(true))}
          ></div>
        </Html>
        <mesh
          name="Scene_1"
          castShadow
          receiveShadow
          geometry={nodes.Scene_1.geometry}
          material={nodes.Scene_1.material}
          position={[3.05, 0, 6.52]}
          rotation={[-Math.PI, 0, -Math.PI]}
        >
          <meshBasicMaterial map={bakedScene} map-flipY={false} />
        </mesh>
        <mesh
          name="Sofa_Black"
          castShadow
          receiveShadow
          geometry={nodes.Sofa_Black.geometry}
          material={nodes.Sofa_Black.material}
          position={[9.14, 0, -4.73]}
        >
          <meshStandardMaterial roughness={0.2} color="black" metalness={0.9} />
        </mesh>
        <mesh
          name="Sofa_Leg"
          castShadow
          receiveShadow
          geometry={nodes.Sofa_Leg.geometry}
          material={nodes.Sofa_Leg.material}
          position={[9.14, 0, -4.73]}
        >
          <meshStandardMaterial roughness={0.9} color="black" metalness={0.6} />
        </mesh>
        <mesh
          name="Sofa_Pod"
          castShadow
          receiveShadow
          geometry={nodes.Sofa_Pod.geometry}
          material={nodes.Sofa_Pod.material}
          position={[9.07, 0.84, -3.83]}
          rotation={[0, 0, -1.29]}
        >
          <meshStandardMaterial roughness={0.9} color="gray" metalness={0.9} />
        </mesh>
        <mesh
          name="Sofa_Table"
          castShadow
          receiveShadow
          geometry={nodes.Sofa_Table.geometry}
          material={nodes.Sofa_Table.material}
          position={[12.31, -0.14, -4.86]}
        >
          <meshStandardMaterial roughness={0.2} color="gray" />
        </mesh>
      </group>
    </group>
  );
}

export { Model };
