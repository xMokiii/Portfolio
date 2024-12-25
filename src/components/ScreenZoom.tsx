import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useSmoothScroll from '../hooks/useSmoothScroll';
import styles from '../styles/ScreenZoom.module.css';

gsap.registerPlugin(ScrollTrigger);

const ScreenZoom: React.FC = () => {
  useSmoothScroll(); // Enable smooth scrolling with Lenis
  const containerRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isHidden, setIsHidden] = useState(false); // Toggle for the title
  const [isDivVisible, setIsDivVisible] = useState(false); // Toggle for the appearing div

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
          onUpdate: (self) => {
            const progress2 = self.progress; // Progress of the scroll
            setIsHidden(progress2 > 0.15); // Hide the title when progress2 > 0.15
            setIsDivVisible(progress2 >= 1); // Show the div when zoom is maximum
          },
        },
      })
        .to(screen, {
          '--progress2': 1,
          scale: 20,
          ease: 'power2.inOut',
        })
        .to(screen, {
          opacity: 0, // Decrease opacity after the zoom ends
          ease: 'power1.out',
          duration: 0.5,
        });
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <h1 ref={titleRef} className={styles.title} hidden={isHidden}>
        Bienvenue dans votre solution
      </h1>
      <div ref={screenRef} className={styles.screen}>
        <img src="/laptop2.png" alt="Laptop" className={styles.image} />
      </div>
      {isDivVisible && (
        <div className={styles.appearingDiv}>
          <p>Zoom is at its maximum!</p>
        </div>
      )}
    </div>
  );
};

export default ScreenZoom;
