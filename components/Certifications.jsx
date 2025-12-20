import styles from '../styles/Certifications.module.css';

export default function Certifications() {
  const certifications = [
    {
      name: 'Certified System Administrator (CSA)',
      issuer: 'ServiceNow',
      year: 'May 2025'
    },
    {
      name: 'Certified Application Developer (CAD)',
      issuer: 'ServiceNow',
      year: 'June 2025'
    }
  ];

  return (
    <section id="certifications" className={styles.certifications}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.number}>05.</span> Certifications
      </h2>
      <div className={styles.certGrid}>
        {certifications.map((cert, index) => (
          <div key={index} className={styles.certCard}>
            <div className={styles.certIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className={styles.certName}>{cert.name}</h3>
            <p className={styles.certIssuer}>{cert.issuer}</p>
            <span className={styles.certYear}>{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


