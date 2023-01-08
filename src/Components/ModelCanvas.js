import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import { useNavigate } from "react-router-dom";

import './ModelCanvas.scss';


function Model({ modelPath }) {
  const { scene } = useGLTF(`${modelPath}`);
  return <primitive object={scene} />;
}

export default function ModelCanvas(props) {
  const navigate = useNavigate();

  return (
    <div>
      <Canvas className="model-canvas" pixelratio={[1, 2]} camera={{ position: [-10, 15, 15], fov: 50 }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model modelPath={props.modelPath} />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <button onClick={() => navigate(-1)} className="link-back">
        <img src="/icons8-left-arrow-50.png" alt="Error" className="img-back" />
      </button>
    </div>
    
  );
}