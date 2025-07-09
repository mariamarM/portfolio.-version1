import { motion } from 'framer-motion';
import '../styles/starlogo.css';
import star from '../multimedia/star.png';  


export default function StarLogo({ position }) {
  const positions = {
    footer: { top: '90%', left: '50%' },
    navbar: { top: '20px', left: '20px' }
  };

  return (
    <motion.img
      src={star}
      alt="star logo"
      className={style['star-logo']}
      animate={positions[position]}
      transition={{ type: 'spring', stiffness: 70, damping: 20 }}
    />

  );
}
