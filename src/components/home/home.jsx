import React from 'react';
import styles from './home.module.css';
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineSummarize } from "react-icons/md";
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { SocialMedia } from '../../utils/socialMedia/socialMedia';



export const Home = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbn2bb4e2'
    }
  });


  const myImage = cld.image('primerFondo')



  return (
    <div className={styles.container}>
      <section className={styles.columnText}>
        <div className={styles.boxTitle}>
          <span>FULL STACK</span>
          <span>DEVELOPER</span>
        </div>
        <div className={styles.botones}>
          <button><MdOutlineSummarize />CV</button>
          <button><FaProjectDiagram/>Mis Proyectos</button>
        </div>
        <SocialMedia/>
      </section>
      <section className={styles.columnImg}>

      </section>
    </div>
  )
}
