import { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

// Constants
const PROFILE_IMAGE_ID = '1Rcoaq-A4LQoIXvXjLK8-a9Hd98Ody4ot';
const PROFILE_IMAGE_PRIMARY = `https://drive.google.com/thumbnail?id=${PROFILE_IMAGE_ID}&sz=w1000`;
const PROFILE_IMAGE_FALLBACK = `https://drive.google.com/uc?export=view&id=${PROFILE_IMAGE_ID}`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.3
    }
  }
};

const borderVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.6
    }
  }
};

// Content data
const aboutContent = [
  {
    parts: [
      'Aspiring Software Engineer with strong foundations in Java, JavaScript, MERN stack, and backend engineering. ',
      { text: '750+ DSA problems', highlight: true },
      ' across LeetCode, GFG, CodeChef, and HackerRank.'
    ]
  },
  {
    text: 'Experienced in building scalable full-stack applications, designing REST APIs, and implementing clean, modular architectures. Passionate about solving real-world problems, system design, and writing reliable software with high performance and readability.'
  },
  {
    text: 'Currently pursuing my Bachelor of Technology in Computer Science and Engineering at Anurag University with a GPA of 8.71/10, with a focus on backend engineering and distributed systems.'
  }
];

export default function About() {
  // Memoized error handler to prevent recreation on each render
  const handleImageError = useCallback((e) => {
    if (e.target.src !== PROFILE_IMAGE_FALLBACK) {
      e.target.src = PROFILE_IMAGE_FALLBACK;
    }
  }, []);

  // Memoized paragraphs to prevent unnecessary re-renders
  const paragraphs = useMemo(() => {
    return aboutContent.map((content, index) => {
      if (content.parts) {
        return (
          <motion.p
            key={index}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {content.parts.map((part, partIndex) => {
              if (typeof part === 'object' && part.highlight) {
                return (
                  <span key={partIndex} className={styles.highlight}>
                    {part.text}
                  </span>
                );
              }
              return <span key={partIndex}>{part}</span>;
            })}
          </motion.p>
        );
      }
      return (
        <motion.p
          key={index}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {content.text}
        </motion.p>
      );
    });
  }, []);

  return (
    <section id="about" className={styles.about}>
      <motion.h2
        className={styles.sectionTitle}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <span className={styles.number}>01.</span> About Me
      </motion.h2>
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div className={styles.text}>
          {paragraphs}
        </motion.div>
        <div className={styles.image}>
          <div className={styles.imageWrapper}>
            <motion.img
              src={PROFILE_IMAGE_PRIMARY}
              alt="Gubba Shiva Prasad"
              className={styles.profileImage}
              loading="lazy"
              onError={handleImageError}
              decoding="async"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            />
            <motion.div
              className={styles.imageBorder}
              aria-hidden="true"
              variants={borderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}


