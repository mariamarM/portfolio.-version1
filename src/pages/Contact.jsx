import React from 'react';
import correo from '../multimedia/gmail.png';
import github from '../multimedia/github.png';
import cv from '../multimedia/cv.png';
import style from '../styles/contact.module.css';
export default function Contact() {
  return (
    <>
      <div className={style.contenido}>
        <div className={style.imagenusuario}>
           <a href="mailto:andreo.olivella@gmail.com">
          <img src={correo} alt="Correo" />
          </a>
        </div>
        <div className={style.imagenusuario}>
          <a href="https://github.com/mariamarM" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </div>
        <div className={style.imagenusuario}>
          <a href="/public/CV_ANDREO_MARIA_DAW.pdf" target="_blank" rel="noopener noreferrer">
            <img src={cv} alt="CV" />
          </a>
        </div>
      </div>
      <footer className={style.footerPro}>
        <div className={style.footbar}></div>
        <h1 className={style.titlefooter}>02</h1>
        <h1 className={style.titlefooter}>CONTACT</h1>
      </footer>
    </>
  )
}
