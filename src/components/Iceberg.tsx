import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Iceberg = () => {
  const icebergRef = useRef<THREE.Group>(null!);
  const { scene } = useGLTF("/Iceberg.glb"); // Charge le modèle
  const [scrollY, setScrollY] = useState(0);

  // Met à jour la position Y en fonction du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * 0.003); // Ajuste la vitesse du déplacement (plus lent)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (icebergRef.current) {
      icebergRef.current.position.y = -4.5 +  scrollY; // Inverse le sens de défilement pour descendre
    }
  });

  return <primitive ref={icebergRef} object={scene} position={[1, 0, 0]} scale={6} />;
};

export default Iceberg;