import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/projects.module.css';

export default function AnimacionTexto() {
  const textos = ["PHP", "REACT", "HTML", "JAVASCRIPT", "ELEMENTOR", "CSS", "NODE", "PYTHON", "MYSQL"];
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Actualizar dimensiones cuando cambia el tamaño de la ventana
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={styles.fullscreenContainer}
    >
      {textos.map((word, index) => (
        <motion.div
          key={`${word}-${index}`}
          className={styles.fallingWord}
          initial={{ 
            y: -100 - (index * 60),
            opacity: 0,
            scale: 0.8
          }}
          animate={{ 
            y: dimensions.height / 2 - 100 + (index * 40),
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: index * 0.4,
            type: 'spring',
            stiffness: 80 + (index * 10),
            damping: 12,
            mass: 0.8 + (index * 0.1),
            restDelta: 0.001
          }}
          drag
          dragConstraints={containerRef}
          dragElastic={0.05}
          whileDrag={{ 
            scale: 1.2,
            zIndex: 100,
       
          }}
          style={{
            position: 'absolute',
            left: '85%',
            bottom:'114%',
            transform: 'translateX(-50%)',
            zIndex: index
          }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
}