// moco imagenes
import mocoimg from '../multimedia/projmoco.png'
import primgMoco from '../multimedia/tripticomocomuseo.png'
import primgMoco2 from '../multimedia/tripticoAndreo.png'
//ahora deezer
import deezer from '../multimedia/deezer.png'
import maqdeezer from '../multimedia/deezermockup1.png'
import maqdeezer2 from '../multimedia/deeezermocup2.png'
import imgdeezer1 from '../multimedia/deezer1.png'
import imgdeezer2 from '../multimedia/deeezer2.png'
import imgdeezer3 from '../multimedia/deezer3.png'
//abac imagenes
import abac from '../multimedia/abacdos.png'
import abacProto1 from '../multimedia/abacmaqueta1.png'
import abacProto2 from '../multimedia/abacmaqueta2.png'
import imgabac2 from '../multimedia/pantalla1abac.png'
import imgabac3 from '../multimedia/pantallabac2.png'
import imgabac4 from '../multimedia/pantallabac3.png'
import imgabac5 from '../multimedia/pantallabac4.png'
//avbc imagenes
import badaveci from '../multimedia/avbc.png'
import abcdimg1 from '../multimedia/avbc1.png'
import abcdimg2 from '../multimedia/advc2.png'
import abcdimg3 from '../multimedia/advc3.png'
import abcdimg4 from '../multimedia/advbc4.png'

import { link } from 'framer-motion/client'

export const projects = [
  {
    id: 1,
    title: "1r Projecte GINT Museo Moco",
    footertitle:"MOCO PROJECT",
    images: {
        img1: mocoimg,
        img2: primgMoco,
        img3: primgMoco2
    },
    description: "Aquest projecte el vaig començar a 1r de Gràfica Interactiva, a l'assignatura mitjans informàtics. L'activitat consistia en generar un patró en base d'algun museu d'aquí de Barcelona. Jo vaig fer un acabat amb colors barrejats pastissos, ja que el color secundari del museu és rosa vaig aprofitar-ho. Aquest color es veu present en la barreja de colors i la barra de footer en la pàgina web.El producte imprès és un tríptic d'informació sobre una exposició de l'artista xinès Yazing Ke. Primer hi ha la cara adversa i després l'interior del follet. En doblegar-los es veu les XXSS, el nom de l'exposició, el museu i la data d'inici de l'expo. ",
    layout: "left" 
  },
  {
    id: 2,
    title: "Postre Abac",
    footertitle:"ÁBAC PROJECT",
images: {
        img1: abac,
        img2: abacProto1,
        img3: abacProto2,
        img4 : imgabac2,
        img5 : imgabac3,
        img6 : imgabac4,
        img7 : imgabac5
    },
    description: "El projecte de la taula interactiva va ser un projecte de l'assignatura Interfícies d'usuari, on tractava de fer un menú interactiu dintre de la mateixa taula on dinaven els comensals. El restaurant era Àbac, on el xef és Jordi Cruz. Vam prendre les mesures d'una taula estàndard interactiva per menjar 'habitual' en els restaurants. L'elaboració del projecte va estar bastant bé, vam tindre un parell d'excursions a altres estudis de disseny gràfic que estaven experimentant amb això mateix. Vam veure com treballaven amb la mateixa qüestió que nosaltres.",
    layout: "right"
  },
  {
    id: 3,
    title: "DeezerAPI",
    footertitle:"DEEZER PROJECT",
        link: "https://deezerapi.netlify.app/",

    images: {
        img1: deezer,
        img2: maqdeezer,
        img3: maqdeezer2,
        img4: imgdeezer1,
        img5: imgdeezer2,
        img6: imgdeezer3
    },
    description: "Aquest projecte el vaig fer a classe tenint en compte que havíem d'utilitzar una API externa i que les dades s'havien de desar al localStorage per després mostrar-les a la pantalla, i fer una mena d'historial, i alhora que hi hagués un filtre de les cançons escoltades. Està fet amb HTML, CSS i JavaScript tradicional, i els recursos gràfics provenen de biblioteques d’imatges de lliure disposició. És un projecte petit i curt per demostrar que aquests dos punts funcionen correctament, i en vaig gaudir força en el moment de lliurar-lo. Després, l’ampliació d’aquest projecte consisteix a fer que aquestes dades es passin en el moment de crear un usuari i donar-lo d’alta, de manera que aquestes dades estiguin relacionades amb les cançons cercades, i així crear un historial totalment funcional. Utilitzant PHP i MySQL, es tracta de passar aquests camps i, alhora, que en quedi constància.",
    layout: "left"
  },
  {
    id: 4,
    title: "AVBC",
    footertitle:"AVBC PROJECT",
    images: {
        img1: badaveci,
        img2:abcdimg1,
        img3: abcdimg2,
        img4: abcdimg3,
        img5: abcdimg4

    },
    link: "https://avcentre.entitatsbadalona.net/category/noticies-inici/",
    description: "L'associació de veïns de Badalona, va ser un projecte de pràctiques on consistia netejar les pantalles inhabilitades per als residents. Millorar, polir i sintetitzar tant la interfície com el contingut de la pàgina, tenint en compte la majoria d'edat del target de la web. Tenint en compte que el disseny és de plantilla de WordPress, vaig instal·lar diversos plugins i actualitzar els que ja estaven incorporats. En aquest cas el manteniment de la pàgina web no s'havia fet durant una llargada de temps. Aquest projecte es feia entre tres dues persones, la part gràfica dels bàners i la informació fent una mena de prototip de la web, i la part tècnica per posar tots els canvis a la pàgina.",
    layout: "right"
  }
]
