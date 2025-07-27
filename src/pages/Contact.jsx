import React from 'react';
import correo from '../multimedia/gmail.png';
import github from '../multimedia/github.png';
import cv from '../multimedia/cv.png';
import linkedin from '../multimedia/linkedin.png';
import behance from '../multimedia/behance.png';
import InfiniteScroll from "../components/InfinteScroll";
import styles from '../styles/contact.module.css';

const links = [
  {
    icon: correo,
    alt: 'Correo',
    href: 'mailto:andreo.olivella@gmail.com',
  },
  {
    icon: github,
    alt: 'GitHub',
    href: 'https://github.com/mariamarM',
  },
  {
    icon: cv,
    alt: 'CV',
    href: './public/CV_ANDREO_MARIA_DAW.pdf',
  },
    {
    icon: linkedin,
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maria-andreo-olivella-79768125b/',
  },
    {
    icon: behance,
    alt: 'Behance',
    href: 'https://www.behance.net/mariadandreo',
  },
];

const items = links.map((link) => ({
  content: (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="folderLink"
    >
      <div className="folder">
        <img src={link.icon} alt={link.alt} />
        <span className={styles.folderLink}>{link.alt}</span>
      </div>
    </a>
  ),
}));

export default function Contact() {
  return (
    // CONTENEDOR LOCAL QUE CONTROLA EL 100% DEL VIEWPORT
    <div
      style={{
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ÁREA DE SCROLL */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <InfiniteScroll
          items={[...items, ...items, ...items]}
          width="165rem"
          maxHeight="100%"
          negativeMargin="-2em"
          itemMinHeight={240}
          isTilted={false}
          autoplay={true}
          autoplaySpeed={0.4}
          autoplayDirection="down"
          pauseOnHover={true}
        />
      </div>

      <footer className={styles.footerPro}>
        <div className={styles.footbar}></div>
        <h1 className={styles.titlefooter}>02</h1>
        <h1 className={styles.titlefooter}>CONTACT</h1>
      </footer>
    </div>
  );
}
