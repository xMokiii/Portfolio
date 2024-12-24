import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useSmoothScroll from '../hooks/useSmoothScroll';
import styles from '../styles/ScreenZoom.module.css';

gsap.registerPlugin(ScrollTrigger);

const ScreenZoom: React.FC = () => {
  useSmoothScroll(); // Activation du scrolling fluide avec Lenis
  const screenRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const screen = screenRef.current;

    if (screen) {
      // Animation GSAP pour zoomer sur l'écran
      gsap.to(screen, {
        scale: 10, // Zoom (valeur ajustable selon besoin)
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: screen, // Le zoom commence en se basant sur l'écran
          start: 'center center', // Quand l'écran est au centre du viewport
          end: '+=2000', // Durée ajustable selon l'effet désiré
          scrub: 2,
          pin: containerRef.current, // Épingle le conteneur pour l'animation fluide
        },
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div ref={screenRef} className={styles.screen}>
        <div className={styles.innerScreen}>
          <p>Écran éteint</p>
        </div>
      </div>
    </div>
  );
};

export default ScreenZoom;
