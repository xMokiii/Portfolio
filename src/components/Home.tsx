import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <img src="/colinphotocv.png" className={styles.image} />
        <p>Bonjour, Je m'appelle Colin, et je suis développeur.</p>
      </div>
    </section>
  );
};

export default Home;
