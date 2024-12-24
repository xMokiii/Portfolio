import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useSmoothScroll from '../hooks/useSmoothScroll';
import styles from '../styles/ScreenZoom.module.css';

gsap.registerPlugin(ScrollTrigger);

const ScreenZoom: React.FC = () => {
  useSmoothScroll(); // Activation du scrolling fluide avec Lenis
  const containerRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const screen = screenRef.current;

    if (container && screen) {
      // GSAP Animation avec variables CSS
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top', // Début de l'effet
          end: '+=2000', // Durée totale de l'animation
          scrub:2, // Synchronisation fluide avec le scroll
          pin: container, // Épingle la section pendant l'animation
        },
      });

      // Progression 1 (Arrêt de l'écran)
      timeline.to(container, {
        '--progress1': 1, // Définit la première variable CSS
        duration: 0.5,
        ease: 'power1.inOut',
      });

      // Zoom de l'écran
      timeline.to(screen, {
        '--progress2': 1, // Définit la deuxième variable CSS
        scale: 8, // Zoom
        ease: 'power2.inOut',
      });

      // Disparition
      timeline.to(screen, {
        opacity: 0, // Disparition de l'écran
        ease: 'power1.out',
        duration: 0.5,
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Titre */}
      <h1 className={styles.title}>Bienvenue dans votre solution</h1>

      {/* Écran avec image */}
      <div ref={screenRef} className={styles.screen}>
        <img src="/laptop2.png" alt="Laptop" className={styles.image} />
      </div>
    </div>
  );
};

export default ScreenZoom;
