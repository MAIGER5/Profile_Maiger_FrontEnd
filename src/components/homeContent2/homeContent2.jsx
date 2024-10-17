import React from 'react';
import styles from './homeContent2.module.css';
import { useNavigate } from 'react-router-dom';
import { cloudinary_Home } from '../../cloudinaryImport/cloudinaryImport';
import { FaProjectDiagram } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";
import { BaseView, BotonLikeComment, Lenguage, SocialMedia } from '../../import_And_export/import_And_export';
import { AdvancedImage } from '@cloudinary/react';


export const HomeContent2 = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path)
  }

  const dataCloudinary = cloudinary_Home


  return (
    <div className={styles.container}>
      <div className={styles.extraContainer}></div>
      <div className={styles.boxTitle}>
        <div className={styles.imgName}>
          <div className={styles.piturePerfil}>
            <AdvancedImage cldImg={dataCloudinary.myPicture} />
          </div>
          <div className={styles.dobleBox}>
            <span className={styles.boxName}>MAIGER OVALLE RUZ</span>
          </div>
        </div>
        <div className={styles.titleProgrammer}>
          <span>DESARROLLADOR</span>
          <span>FULL STACK</span>
        </div>

      </div>
      <BaseView/>
      <section className={styles.columnText}>
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

      </section>

      <section className={styles.docInformation}>
          <div className={styles.botonDoc}>
            <span>01</span>
            <span>CERTIFICACIONES</span>
            <BiDownArrow/>
          </div>
          <div className={styles.botonDoc}>
            <span>02</span>
            <span>LICENCIAS</span>
            <BiDownArrow/>
          </div>
          <div className={styles.botonDoc}>
            <span>03</span>
            <span>CONTACTO</span>
            <BiDownArrow/>
          </div>
          <div className={styles.botonDoc}>
            <span>04</span>
            <span>VIDEO PROFESIONAL</span>
            <BiSolidRightArrow/>
          </div>
      </section>

      {/* <div className={styles.likeBoton}>
        <BotonLikeComment/>
      </div> */}
        <SocialMedia/>

    </div>
  )
}
