import styles from '../styles/Experience.module.css';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'Innobyte Services',
      period: 'Present – 2025',
      location: 'Remote',
      responsibilities: [
        'Developed and maintained backend RESTful APIs using Node.js and Express.js, with database integration using MySQL',
        'Designed and implemented CRUD operations, authentication, and validation logic for scalable web applications',
        'Worked on frontend integration using React.js to ensure seamless interaction between client and server',
        'Collaborated with the development team, participated in code reviews, and followed Git-based version control practices'
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


