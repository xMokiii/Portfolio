import styles from '../styles/Skills.module.css';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Python',
  'C#', 'Unity', 'GitHub', 'Node.js', 'SQL',
  'TypeScript', 'GSAP', 'Lenis', 'MongoDB', 'Express',
];

const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <h2>My Skills</h2>
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.card}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
