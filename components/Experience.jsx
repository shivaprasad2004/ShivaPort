import styles from '../styles/Experience.module.css';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'FlipNow Solutions',
      period: 'Present – 2026',
      location: 'Hyderabad, India',
      responsibilities: [
        'Designed and implemented AI-driven features by analyzing real world problem statements and translating user requirements into technical solutions',
        'Built and tested application modules while collaborating with cross-functional teams to improve system performance and usability',
        'Contributed to platform enhancement by integrating new functionalities'
      ]
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.number}>04.</span> Experience
      </h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineMarker}></div>
            <div className={styles.timelineContent}>
              <div className={styles.role}>{exp.role}</div>
              <div className={styles.company}>{exp.company}</div>
              <div className={styles.period}>{exp.period} • {exp.location}</div>
              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


