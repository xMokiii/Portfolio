import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/ScreenZoom.module.css';
import useSmoothScroll from '../hooks/useSmoothScroll';

gsap.registerPlugin(ScrollTrigger);

const ScreenZoom: React.FC = () => {
  useSmoothScroll();

  const containerRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const screen = screenRef.current;

    if (container && screen) {
      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=3500',
          scrub: true,
          pin: container,
          onUpdate: ({ progress }) => setIsHidden(progress > 0.35),
        },
      })
        .to(screen, {
          '--progress2': 1,
          scale: 20,
          ease: 'power2.inOut',
        })
        .to(screen, {
          opacity: 0,
          ease: 'power1.out',
          duration: 0.5,
        });
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <h1 className={styles.title} hidden={isHidden}>
        Bienvenue dans votre solution
      </h1>
      <div ref={screenRef} className={styles.screen}>
        <img src="/laptop2.png" alt="Laptop" className={styles.image} />
      </div>
      <div className={styles.appearingDiv} hidden={!isHidden}>
        <p>Zoom is at its maximum!</p>
      </div>
    </div>
  );
};

export default ScreenZoom;
