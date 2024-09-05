import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random";
import styled from "styled-components";
import * as THREE from "three";

const CanvasWrapperDiv = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

const Stars: React.FC = (props) => {
    const ref = useRef<THREE.Points>(null);
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(4000), { radius: 1.2 })
    );

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#07bbf7"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StyledStarsCanvas: React.FC = () => {
    return (
        <CanvasWrapperDiv>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </CanvasWrapperDiv>
    );
};

export default StyledStarsCanvas;
