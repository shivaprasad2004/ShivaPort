import { useEffect, useState } from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.greeting}>Hi, my name is</div>
        <h1 className={styles.name}>Gubba Shiva Prasad</h1>
        <h2 className={styles.role}>Software Engineer | Backend & Full-Stack Developer</h2>
        <p className={styles.tagline}>
          Aspiring Software Engineer • MERN Stack • Java • System Design • 750+ DSA Problems Solved
        </p>
        <p className={styles.location}>📍 Hyderabad, India</p>
        <div className={styles.cta}>
          <button
            className={styles.primaryBtn}
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
          <button
            className={styles.secondaryBtn}
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </button>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}></div>
      </div>
    </section>
  );
}


