import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";
import { MeshStandardMaterial } from "three";
const Earth: React.FC = () => {
    const earth = useGLTF("./Planet/scene.gltf");
    const texture = useLoader(TextureLoader, "./Texture/earth.png");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    earth.scene.traverse((node: any) => {
        if (node.isMesh) {
            if (node.material.name === 'Planet') {
                node.material = new MeshStandardMaterial({ map: texture }); // Apply texture to the planet
            } else if (node.material.name === 'Clouds' || node.material.name === 'Clouds_1') {
                // Optionally apply a material or adjust cloud properties here
                // Example: Adjust opacity or use a cloud texture
                node.material.transparent = true; // Ensure clouds are transparent
                node.material.opacity = 0.8; // Adjust opacity for clouds
            }
        }
    });
    return (
        <primitive object={earth.scene} scale={3} position-y={0} rotation-y={1} />
    );
};

const EarthCanvas: React.FC = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 3]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
