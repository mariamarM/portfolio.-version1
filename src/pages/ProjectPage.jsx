import { useParams } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '../data/projectsData'
import styles from '../styles/projects.module.css'

const ParallaxImage = ({ src, alt, index }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Movimiento horizontal sutil mientras se hace scroll vertical
  const direction = index % 2 === 0 ? 1 : -1
  const x = useTransform(scrollYProgress, [0, 1], [50 * direction, -50 * direction])

  return (
    <motion.div 
      ref={ref}
      style={{ x }}
    >
      <img className={styles.imgParallax} src={src} alt={alt} />
    </motion.div>
  )
}

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find(p => p.id === Number(id))

  if (!project) return <p className={styles.textProj}>Project not found :C</p>

  return (
    <div className={styles.finalProjectPage}>
      {/* Sección de información ESTÁTICA (Fixed) */}
      <div className={styles.leftInfoSection}>
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {project.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {project.description}
        </motion.p>
      </div>

      {/* Columna de imágenes con Scroll y Parallax */}
      <div className={styles.parallaxImageColumn}>
        <ParallaxImage src={project.images.img1} alt={project.title} index={0} />
        <ParallaxImage src={project.images.img2} alt={project.title} index={1} />
        <ParallaxImage src={project.images.img3} alt={project.title} index={2} />
      </div>

      {/* Footer Estático (Fixed) */}
      <footer className={styles.fixedProjectFooter}>
        <div className={styles.footerBar}></div>
        <h1 className={styles.footerTitle}>0{project.id}</h1>
        <h1 className={styles.footerTitle}>{project.footertitle}</h1>
      </footer>
    </div>
  )
}
