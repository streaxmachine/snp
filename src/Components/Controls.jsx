import React, { useRef, useEffect } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";

import { MapControls } from "three/examples/jsm/controls/OrbitControls";

extend({ MapControls });

function Controls(props) {
  const controls = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    controls.current.update();
  });

  useEffect(() => {
    controls.current.addEventListener("change", function () {
      if (this.target.z < -8) {
        this.target.z = -8;
        camera.position.z = this.target.z + 4;
      } else if (this.target.z > 2) {
        this.target.z = 2;
        camera.position.z = this.target.z + 4;
      }

      if (this.target.x < -28) {
        this.target.x = -28;
        camera.position.x = this.target.x + 25;
      } else if (this.target.x > 0) {
        this.target.x = 0;
        camera.position.x = this.target.x + 25;
      }
    });
  }, [camera.position]);

  return (
    <mapControls
      ref={controls}
      args={[camera, gl.domElement]}
      dampingFactor={0.05}
      enableDamping={true}
      panSpeed={0.45}
      enableZoom={false}
      enableRotate={false}
    />
  );
}

export default Controls;
