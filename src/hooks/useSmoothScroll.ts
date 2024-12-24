import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useSmoothScroll = () => {
  useEffect(() => {
  
    const lenis = new Lenis({
      lerp: 0.1,
    });

  
    const raf = (time: number) => {
      lenis.raf(time); 
      ScrollTrigger.update(); 
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

  
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return value !== undefined
          ? lenis.scrollTo(value) 
          : lenis.scroll.instance.scroll.y; 
      },
    });

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy(); 
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

export default useSmoothScroll;
