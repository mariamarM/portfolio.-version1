import imagenMaria  from '../multimedia/maria.png';
import style from '../styles/about.module.css';

export default function About() {
  return (
    <><div className={style.contenido}>
      <div className={style.imagenusuario}>
        <img src={imagenMaria} alt="Maria Andreo" />
      </div>
      <div className={style.descripcion}>
        <div className={style.titulonombre}>
          MARIA ANDREO OLIVELLA <div className={style.separador}></div> 21 ANYS
        </div>
        <div className={style.yoliteral}>
          Soc una estudiant de DAW (Desenvolupament Aplicacions Web) a la Monlau, la Sagrera. Vaig fer també el grau  mitjà de Disseny Gràfic, i el CFGS de Gràfica Interactiva(UIX, UX) al mateix lloc, EA Pau Gargallo. Vaig realitzar les pràctiques de grau en un laboratori imprès de Barcelona 'laboratori Burch', també fent diverses págines web i petits treballs.


          <br /> <br />Vaig estar treballant a una cadena de supermercats de Catalunya, cara al públic, mentre feia el primer curs de 1r de Gràfica Interactiva.


        </div>
      </div>

    </div>
    <footer className={style.footerPro}>
        <div className={style.footbar}></div>
        <h1 className={style.titlefooter}>01</h1>
        <h1 className={style.titlefooter}>ABOUT ME</h1>
      </footer>
      </>
  )
}
