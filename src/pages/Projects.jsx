import styles from '../styles/projects.module.css';
import mocoimg from '../multimedia/projmoco.png'
import deezer from '../multimedia/deezer.png'
import abac from '../multimedia/abacdos.png'
import badaveci from '../multimedia/avbc.png'
import flecha from '../multimedia/flechaProjpng.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <div className={styles.home}>
      <div className={styles.cosasProj}>


        <motion.div
          className={styles.projMoco}
          whileHover={{ scale: 1.03 }}
        >
          <Link to="/projects/1" className={styles.linkContainer}>
            <motion.img
              src={mocoimg}
              alt="moco"
              className={styles.bgImage}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.5 }}
            />
            <img className={styles.flecha} src={flecha} alt="flecha" />
            <p className={styles.textProj}>Moco project</p>
          </Link>
        </motion.div>


        <motion.div className={styles.projAbac} whileHover={{ scale: 1.03 }}>
          <Link to="/projects/2" className={styles.linkContainer}>
            <motion.img
              src={abac}
              alt="abac"
              className={styles.bgImage}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <img className={styles.flecha} src={flecha} alt="flecha" />
            <p className={styles.textProj}>ÁBaC</p>
          </Link>
        </motion.div>


        <motion.div className={styles.projDeezer} whileHover={{ scale: 1.03 }}>
          <Link to="/projects/3" className={styles.linkContainer}>
            <motion.img
              src={deezer}
              alt="deezer"
              className={styles.bgImage}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.5 }}
            />
            <img className={styles.flecha} src={flecha} alt="flecha" />
            <p className={styles.textProj}>Deezer</p>
          </Link>
        </motion.div>


        <motion.div className={styles.projBada} whileHover={{ scale: 1.03 }}>
          <Link to="/projects/4" className={styles.linkContainer}>
            <motion.img
              src={badaveci}
              alt="badaveci"
              className={styles.bgImage}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.5 }}
            />
            <img className={styles.flecha} src={flecha} alt="flecha" />
            <p className={styles.textProj}>Associació Veins <br />de Badalona</p>
          </Link>
        </motion.div>
        <div className={styles.descProj}>
          Aquests són els projectes tant acadèmics com de <br />pràctiques que he estat treballant en ells.
         <br /> He fet ús de diferents frameworks, però majoritàriament <br /> em sento familiaritzada amb eines de FrontEnd.

        </div>
        <div className={styles.framworks}>

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
