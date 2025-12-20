import styles from '../styles/Skills.module.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Java', 'JavaScript', 'Python', 'C++']
    },
    {
      title: 'Web',
      skills: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'REST APIs']
    },
    {
      title: 'Databases',
      skills: ['MySQL']
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'AWS (EC2, S3)']
    },
    {
      title: 'Core CS',
      skills: ['DSA', 'OOP', 'OS', 'DBMS', 'CN', 'System Design', 'ML']
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.number}>02.</span> Skills
      </h2>
      <div className={styles.skillsGrid}>
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillList}>
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


