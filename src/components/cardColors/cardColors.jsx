import React from 'react';
import styles from './cardColors.module.css';
import { IoLogoReact } from "react-icons/io5";
import { Data_FullStack } from '../../data/data_FullStack';





export const CardColors = () => {

  const data = Data_FullStack



  return (
    <div className={styles.container}>
      {
        data?
        data.map((el)=>(
          <div key={el.id} className={styles.card}>
            <section>
              {el.icon}
              <span>{el.title}</span>
            </section>
            <ul>
              {
                el.infoCard?
                el.infoCard.map((la)=>(
                  <li key={la.Infid}>
                    <div style={{color:la.colorStyle}}>
                      {la.Inficon}
                    </div>
                    <span>{la.Infspan}</span>
                  </li>
                )):''
              }
            </ul>
          </div>
        )):''
      }

    </div>
  )
}
