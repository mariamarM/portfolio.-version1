import styles from '../styles/projects.module.css';
import mocoimg from '../multimedia/projmoco.png'
import deezer from '../multimedia/deezer.png'
import abac from '../multimedia/abacdos.png'
import badaveci from '../multimedia/avbc.png'
import flecha from '../multimedia/flechaProjpng.png'
import { Link } from 'react-router-dom'

import star from '../multimedia/star.png'
export default function Projects() {
  return (
    <div className={styles.home}>
      <div className={styles.cosasProj}>
        <div className={styles.proj}>
          <Link to="/projects/1">
            <img className={styles.flecha} src={flecha} alt="felcha" /> 

           {/* <img className={styles.mocoimg} src={mocoimg} alt="mocomuseo" /> */}
          <p className={styles.textProj}>mocoproject</p>
          </Link>
        </div>

        <div className={styles.proj}>
          <Link to="/projects/2">
            <img className={styles.abac} src={abac} alt="abac" />
            <p className={styles.textProj}>ÁBaC</p>
          </Link>
        </div>

        <div className={styles.proj}>
          <Link to="/projects/3">
            <img className={styles.deezer} src={deezer} alt="deezer" />
            <p className={styles.textProj}>Deezer API</p>
          </Link>   
        </div>

        <div className={styles.proj}>
          <Link to="/projects/4">
            <img className={styles.badaveci} src={badaveci} alt="badaveci" />
            <p className={styles.textProj}>AVCB</p>
          </Link>
        </div>
      </div>

      <footer className={styles.footerPro}>
        <div className={styles.footbar}></div>
        <h1 className={styles.titlefooter}>03</h1>
        <h1 className={styles.titlefooter}>PROJECTS</h1>
      </footer>
    </div>
  )
}

