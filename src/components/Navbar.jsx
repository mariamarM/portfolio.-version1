import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/navbar.module.css'


export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`${styles.navbar} ${isHome ? styles.homeNavbar : ''}`}>
      <Link to="/">MARIA ANDREO</Link>
      <div className={styles.navLinks}>
      <Link to="/projects">PROJECTS</Link>
      <Link to="/contact">CONTACT</Link>
      <Link to="/about">ABOUT ME</Link>
      </div>
    </nav>
  )
}
