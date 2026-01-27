import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gubba Shiva Prasad | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Gubba Shiva Prasad - Software Engineer specializing in Backend and Full-Stack Development. 2026 CSE Graduate."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}



