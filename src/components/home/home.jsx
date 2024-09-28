import React from 'react';
import styles from './home.module.css';
import { FaProjectDiagram } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";
import { AdvancedImage } from '@cloudinary/react';
import { cloudinary_Home } from '../../cloudinaryImport/cloudinaryImport';
import { BaseView, Lenguage, SocialMedia } from '../../import_And_export/import_And_export';



export const Home = () => {

  const dataCloudinary = cloudinary_Home

  return (
    <div className={styles.container}>
      <BaseView/>
      <section className={styles.columnText}>
        <div className={styles.boxTitle}>
          <span>FULL STACK</span>
          <span>DEVELOPER</span>
          {/* <span>MAIGER OVALLE RUZ</span> */}
        </div>

        <div className={styles.squareBotons}>
          <span id={styles.botonOrange}>CV</span>
          <div className={styles.textBotones}>
            <span>PERFIL</span>
            <span>PROFESIONAL</span>
          </div>
        </div>

        <div className={styles.squareBotons}>
          <span id={styles.botonGreen}><FaProjectDiagram/></span>
          <div className={styles.textBotones}>
            <span>REPOSITORIOS</span>
            <span>PROYECTOS</span>
          </div>
        </div>

        <div className={styles.dobleBox}>
          <span className={styles.boxContact}>MAIGER OVALLE RUZ</span>
        </div>

      </section>

      <section className={styles.columnImg}>
        <Lenguage/>
        <SocialMedia/>
        <div className={styles.boxSideRight}>
          <div className={styles.boxLineText}>
            <div className={styles.lineText}>
              <span>01</span>
              <span>CERTIFICACIONES</span>
              <span>/2024</span>
            </div>
            <div className={styles.lineText}>
              <span>02</span>
              <span>LICENCIAS</span>
              <span>/2024</span>
            </div>
            <div className={styles.lineText}>
              <span>03</span>
              <span>INFORMACIÓN DE CONTACTO</span>
              <span>/2024</span>
            </div>
          </div>
          <div className={styles.boxLineBar}>

          </div>
        </div>


      </section>


      <div className={styles.piturePerfil}>
        <AdvancedImage cldImg={dataCloudinary.myPicture} />
      </div>

      <div className={styles.pageFeet}>
        <div>
          <FaPlay />
        </div>
        <span>Video de Presentación</span>
        <div className={styles.likeBoton}>
          <AiFillLike />
          <span>10</span>
        </div>
        <div className={styles.likeBoton}>
          <FaComment />
          <span>5</span>
        </div>
      </div>

    </div>
  )
}

