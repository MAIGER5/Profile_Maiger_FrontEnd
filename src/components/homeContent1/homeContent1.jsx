import React from 'react';
import styles from './homeContent1.module.css';
import { useNavigate } from 'react-router-dom';
import { cloudinary_Home } from '../../cloudinaryImport/cloudinaryImport';
import { FaProjectDiagram } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { BaseView, BotonLikeComment, Lenguage, SocialMedia } from '../../import_And_export/import_And_export';
import { AdvancedImage } from '@cloudinary/react';


export const HomeContent1 = () => {

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path)
  }

  const dataCloudinary = cloudinary_Home


  return (
    <div className={styles.container}>
      <div className={styles.extraContainer}></div>
      <BaseView/>
      <section className={styles.columnText}>
        <div className={styles.boxTitle}>
          <span>FULL STACK</span>
          <span>DEVELOPER</span>
        </div>
        <div className={styles.piturePerfil}>
          <AdvancedImage cldImg={dataCloudinary.myPicture} />
        </div>

        <div className={styles.squareBotons}>
          <span 
            id={styles.botonOrange}
            onClick={ ()=> handleNavigate('/profesionalProfile')}
          >CV</span>
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
          <span className={styles.boxName}>MAIGER OVALLE RUZ</span>
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

      <div className={styles.pageFeet}>
        <div>
          <FaPlay />
        </div>
        <span>Video de Presentación</span>
      </div>

      <div className={styles.likeBoton}>
        <BotonLikeComment/>
      </div>

    </div>
  )
}
