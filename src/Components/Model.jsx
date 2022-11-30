import { useGLTF, useTexture, Html } from "@react-three/drei";
import { useDispatch } from "react-redux";
import { setHouseShowInfo, setSnpShowInfo } from "../redux/actions";
import { TableInfo } from "./TableInfo";
import { Camera } from "./Camera";
import { useScroll } from "@react-three/drei";

function Model({ domEl, ...props }) {
  const dispatch = useDispatch();
  const bakedFloor = useTexture("/BakedFloorWallsGood2.jpg");
  const bakedScene = useTexture("/BakedScene.002.jpg");
  const houseTexture = useTexture("/QueryHouse.jpg");
  const { nodes } = useGLTF("/snpoffice9.glb");
  const scroll = useScroll();

  const handleClick = (showSnp, showHouse) => {
    dispatch(setHouseShowInfo());
  };

  return (
    <>
      <Camera scroll={scroll} />

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

          <Html
            zIndexRange={[0, 0]}
            center
            distanceFactor={12}
            position={[-15, 4.8, -2.5]}
            portal={domEl}
          >
            <div
              className="label-3d"
              onClick={() => dispatch(setSnpShowInfo())}
            ></div>
          </Html>

          <mesh
            name="Sofa_Black"
            castShadow
            receiveShadow
            geometry={nodes.Sofa_Black.geometry}
            material={nodes.Sofa_Black.material}
            position={[9.14, 0, -4.73]}
          >
            <meshStandardMaterial
              roughness={0.2}
              color="black"
              metalness={0.9}
            />
          </mesh>
          <mesh
            name="Sofa_Leg"
            castShadow
            receiveShadow
            geometry={nodes.Sofa_Leg.geometry}
            material={nodes.Sofa_Leg.material}
            position={[9.14, 0, -4.73]}
          >
            <meshStandardMaterial
              roughness={0.9}
              color="black"
              metalness={0.6}
            />
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
            <meshStandardMaterial
              roughness={0.9}
              color="gray"
              metalness={0.9}
            />
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
            <Html
              position={[0, 0.5, 0]}
              zIndexRange={[0, 0]}
              center
              distanceFactor={5}
              portal={domEl}
            >
              <TableInfo />
            </Html>
          </mesh>
        </group>
      </group>
      <mesh rotation-y={Math.PI / 2} position={[-13, 2.5, 5]}>
        <planeGeometry args={[2, 3.5]} />
        <meshStandardMaterial color="white" map={houseTexture} />
        <Html
          zIndexRange={[0, 0]}
          center
          distanceFactor={5}
          position-y={1.8}
          position-x={0.9}
          // position={[-15, 4.2, 5.2]}
          portal={domEl}
        >
          <div
            className="label-3d"
            onClick={() => handleClick(false, true)}
          ></div>
        </Html>
      </mesh>
    </>
  );
}

useGLTF.preload("/snpoffice9.glb");

export { Model };
