import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/projects.module.css';

export default function CircularRevealCard({ imgSrc, title, to, flecha, className }) {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const maskPosition = useMotionTemplate`${mouseX}px ${mouseY}px`;

  const maskStyle = {
    WebkitMaskImage: 'url(/circle.svg)',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskSize: '180px',
    WebkitMaskPosition: maskPosition,
    maskImage: 'url(/circle.svg)',
    maskRepeat: 'no-repeat',
    maskSize: '180px',
    maskPosition: maskPosition,
    opacity: hovered ? 1 : 0,
    transition: 'opacity 0.3s ease',
  };

  return (
    <motion.div
      className={`${className} ${styles.card}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className={styles.bgReveal}
        style={{
          ...maskStyle,
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Link to={to} className={styles.linkContainer}>
        <img className={styles.flecha} src={flecha} alt="flecha" />
        <p className={styles.textProj}>{title}</p>
      </Link>
    </motion.div>
  );
}
