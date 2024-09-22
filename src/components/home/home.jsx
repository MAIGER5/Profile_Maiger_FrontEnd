import React from 'react';
import styles from './home.module.css';
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineSummarize } from "react-icons/md";
import { AdvancedImage } from '@cloudinary/react';
import { SocialMedia } from '../../utils/socialMedia/socialMedia';
import { cloudinary_Home } from '../../cloudinaryImport/cloudinaryImport';



export const Home = () => {

  const dataCloudinary = cloudinary_Home

  return (
    <div className={styles.container}>
      <section className={styles.columnText}>
        <div className={styles.boxTitle}>
          <span>FULL STACK</span>
          <span>DEVELOPER</span>
          {/* <span>MAIGER OVALLE RUZ</span> */}
        </div>

        <div className={styles.squareBotons}>
          <span id={styles.botonOrange}>CV</span>
          <div className={styles.textBotones}>
            <span>INFORMACION</span>
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
          <span className={styles.boxContact}>1 millon de dolar +</span>
        </div>

      </section>

      <section className={styles.columnImg}>
        <SocialMedia/>
        <div className={styles.boxSideRight}></div>

        <div className={styles.boxLineText}>
          <div className={styles.lineText}>
            <span>01</span>
            <span>hola cmo estas</span>
            <span>/2024</span>
          </div>
          <div className={styles.lineText}>
            <span>01</span>
            <span>hola cmo estas</span>
            <span>/2024</span>
          </div>
          <div className={styles.lineText}>
            <span>01</span>
            <span>hola cmo estas</span>
            <span>/2024</span>
          </div>
        </div>

      </section>


      <div className={styles.piturePerfil}>
        <AdvancedImage cldImg={dataCloudinary.myPicture} />
      </div>
    </div>
  )
}

