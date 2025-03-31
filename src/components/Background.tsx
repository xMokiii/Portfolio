import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Iceberg from "./Iceberg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import "../styles/Background.module.css";
import CameraController from "./CameraController";

gsap.registerPlugin(ScrollTrigger);

const Background: React.FC = () => {
  const icebergRef = useRef<THREE.Object3D | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (icebergRef.current) {
      gsap.to(icebergRef.current.position, {
        y: -10, // Animation de l'iceberg qui descend
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          markers: true,
        },
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="canvas-container" >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <CameraController />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 10, 10]} intensity={1} />
        <Iceberg ref={icebergRef} scaleFactor={6} positionX={2} positionY={-4} />
      </Canvas>
    </div>
  );
};

export default Background;
