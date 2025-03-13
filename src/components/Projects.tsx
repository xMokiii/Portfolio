import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Projects.module.css';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const scrollWidth = container.scrollWidth - window.innerWidth;

    
      gsap.to(container, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: true,
          pin: true, 
        },
      });
    }
  }, []);

  return (
    <section className={styles.projects} ref={containerRef}>
      <div className={styles.gallery}>
        <div className={styles.project}>Project 1</div>
        <div className={styles.project}>Project 2</div>
        <div className={styles.project}>Project 3</div>
      </div>
    </section>
  );
};

export default Projects;
