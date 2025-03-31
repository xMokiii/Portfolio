import React, { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CameraController: React.FC = () => {
    const { camera } = useThree();
    const containerRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      if (containerRef.current) {
        gsap.to(camera.position, {
          y: -10, // Descend la caméra le long de l'axe Y
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
    }, [camera]);
  
    return null;
  };

export default CameraController;