import styles from '../styles/projects.module.css';
import mocoimg from '../multimedia/projmoco.png'
import deezer from '../multimedia/deezer1.png'
import abac from '../multimedia/pantallabac3.png'
import badaveci from '../multimedia/advc2.png'
import flecha from '../multimedia/flechaProjpng.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CircularRevealCard from '../components/CircularMascara.jsx';
import { useEffect, useState } from 'react';
import AnimacionTexto from '../components/AnimacionTexto.jsx';

export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handle = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);
  return pos;
}

export default function Projects() {
  return (
    <div className={styles.home}>
      <div className={styles.cosasProj}>

        <CircularRevealCard
          imgSrc={mocoimg}
          title="Moco project"
          to="/projects/1"
          flecha={flecha}
          className={styles.projMoco}
        />

        <CircularRevealCard
          imgSrc={abac}
          title="ÁBaC"
          to="/projects/2"
          flecha={flecha}
          className={styles.projAbac}
        />

        <CircularRevealCard
          imgSrc={deezer}
          title="Deezer API"
          to="/projects/3"
          flecha={flecha}
          className={styles.projDeezer}
        />

        <CircularRevealCard
          imgSrc={badaveci}
          title="Associació Veïns de Badalona"
          to="/projects/4"
          flecha={flecha}
          className={styles.projBada}
        />

        <div className={styles.descProj}>
          Aquests són els projectes tant acadèmics com de <br />pràctiques que he estat treballant en ells.
          <br /> He fet ús de diferents frameworks, però majoritàriament <br /> em sento familiaritzada amb eines de FrontEnd.
    <div className={styles.framworks}>
        </div>
                    <AnimacionTexto />

        </div>
 

    
   

      </div>

      <footer className={styles.footerPro}>
        <div className={styles.footbar}></div>
        <h1 className={styles.titlefooter}>03</h1>
        <h1 className={styles.titlefooter}>PROJECTS</h1>
      </footer>
    </div>
  );
}
