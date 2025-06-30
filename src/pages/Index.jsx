import styles from '../styles/index.module.css'
// import starLogo from '../components/StarLogo'
import mocoimg from '../multimedia/mocomuseo.png'
import abac from '../multimedia/postreAbac.png'
import sr from '../multimedia/showroom.png'
import triptico from '../multimedia/tripticoAndreo.png'
import star from '../multimedia/star.png'

export default function Index() {
    return (
        <div className={styles.home}>
            <div className={styles.header}>
            <h1 className={styles.title}>PORTFOLI 
                <div className={styles.name}>MARIA DEL MAR</div> 
                <div className={styles.sname}>ANDREO</div>
            </h1>
            </div>
            <div className={styles.divImg}>
                <img className={styles.mocoimg} src={mocoimg} alt="mocomuseo" />
                <img className={styles.abac} src={abac} alt="postreAbac" />
                <img className={styles.sr} src={sr} alt="showroom" />
                <img className={styles.triptico} src={triptico} alt="tripticoAndreo" />
            </div>
            <div className={styles.footer}>
                <img className={styles.star} src={star} alt="star" />
                <div className={styles.footerText}>
                    <p className={styles.subtitle}>DISSENYADORA GRÀFICA <br />FRONTEND I APPS</p>
                </div>
                <p className={styles.subtitle}>2025</p>

            </div>
        </div>
    )
}

