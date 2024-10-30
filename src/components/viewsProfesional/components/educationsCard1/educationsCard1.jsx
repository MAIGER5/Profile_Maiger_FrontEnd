import React from 'react';
import styles from './educationsCard1.module.css';
import { dataCardProfesion } from '../../../../data/dataCardProfesions';
import { BotonUsefull } from '../../../botonUsefull/botonUsefull';

export const EducationsCard1 = () => {



  const data = dataCardProfesion;

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.sectionTitle}>
          <span>Hola, este es!</span>
          <h1>Mi Desarrollo Acadèmico</h1>
          <BotonUsefull title={'Portafolio'}/>
        </div>
        <section className={styles.allCards}>
          {
            data?
            data.map((el)=>(
              <div className={styles.card} key={el.id}>
                <span>{el.id}</span>
                <img src={el.imagen} alt="" />
                <div className={styles.titles}>
                  <span className={styles.welcometo}>{el.title1}</span>
                  <br />
                  <span className={styles.title2}>{el.title2}</span>
                </div>
                <span className={styles.year}>{el.description}</span>
              </div>
            )):''
          }

        </section>
      </div>
    </div>
  )
}
