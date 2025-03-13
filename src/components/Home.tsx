import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <img src="/colinphotocv.png" className={styles.image} />
        <p>Bonjour, je suis Colin Morlion, développeur full-stack en formation à l'EPSI Bordeaux. Passionné par le développement web et les nouvelles technologies, j’aime concevoir des solutions innovantes et travailler sur des projets engageants. Actuellement à la recherche d’un stage de 8 semaines en janvier/février 2025, je suis motivé à apporter mes compétences et à apprendre aux côtés de professionnels.</p>
      </div>
    </section>
  );
};

export default Home;
