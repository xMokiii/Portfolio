import { useEffect, useState } from "react";
import styles from "../styles/ProgressBar.module.css";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressInnerBar}
        style={{ transform: `translateX(${scrollProgress - 100}vw)` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
