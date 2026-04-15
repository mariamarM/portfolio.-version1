import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/navbar.module.css'


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">MARIA ANDREO</Link>
      <div className={styles.navLinks}>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/about">ABOUT ME</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </nav>
  )
}
