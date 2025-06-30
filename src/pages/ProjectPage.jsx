import { useParams } from 'react-router-dom'
import { projects } from '../data/projectsData'
import styles from '../styles/projects.module.css'

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find(p => p.id === Number(id))

  if (!project) return <p>:C</p>

  return (
    <div className={styles.home}>
      <div className={`${styles.proj} ${project.layout === 'left' ? styles.left : styles.right}`}>
        {project.layout === 'right' && (
          <div className={styles.textWrapper}>
            <p className={styles.textProj}>{project.title}</p>
            <p className={styles.descProj}>{project.description}</p>
          </div>
        )}

        <img className={styles.img} src={project.images.img1} alt={project.title} />
        <img className={styles.img} src={project.images.img2} alt={project.title} />
        <img className={styles.img} src={project.images.img3} alt={project.title} />
        {project.layout === 'left' && (
          <div className={styles.textWrapper}>
            <p className={styles.textProj}>{project.title}</p>
            <p className={styles.descProj}>{project.description}</p>
          </div>
        )}
      </div>

      <footer className={styles.footerPro}>
        <div className={styles.footbar}></div>
        <h1 className={styles.titlefooter}>0{project.id}</h1>

        <h1 className={styles.titlefooter}>{project.footertitle}</h1>
      </footer>
    </div>
  )
}
