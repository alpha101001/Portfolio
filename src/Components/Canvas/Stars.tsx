import React, { useRef, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random";
import styled from "styled-components";
import * as THREE from "three";

const CanvasWrapperDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
`;

const Stars: React.FC = (props) => {
    const ref = useRef<THREE.Points>(null);
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 })
    );

    // Circular alpha texture so points render as circles, not squares/ovals
    const circleTexture = useMemo(() => {
        const size = 64;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d")!;
        const gradient = ctx.createRadialGradient(
            size / 2, size / 2, 0,
            size / 2, size / 2, size / 2
        );
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(0.4, "rgba(255,255,255,0.8)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);
        return new THREE.CanvasTexture(canvas);
    }, []);

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
                    map={circleTexture}
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    alphaTest={0.01}
                    vertexColors={false}
                />
            </Points>
        </group>
    );
};

const StyledStarsCanvas: React.FC = () => {
    return (
        <CanvasWrapperDiv>
            <Canvas
                camera={{ position: [0, 0, 1] }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </CanvasWrapperDiv>
    );
};

export default StyledStarsCanvas;
