import React, { useContext } from 'react';
import styles from './cardProjects.module.css';
import { DataContext } from '../../../../dataContext/dataContext';



export const CardProjects = () => {

  const data = useContext(DataContext)

  const handleChangeColor = (color)=>{
    return color === 1
    ? styles.topCard_Color1
    : color === 2
    ? styles.topCard_Color2
    : color === 3
    ? styles.topCard_Color3
    : color === 4
    ? styles.topCard_Color4
    : styles.topCard_Color2

  }

  const handleGoWeb = (URL)=>{
    window.open(URL, '_blank')
  }

  return (
    <div className={styles.container}>
      {
        data.map((el)=>(
          <div className={styles.card} key={el.id} onClick={()=> handleGoWeb(el.linkWeb)}>
            <div className={`${styles.topCard} ${handleChangeColor(el.colorNumber)}`}>
              <div className={styles.imagen}>
                <img src={el.imagen1} alt="logo empresa" />
              </div>
            </div>
            <div className={styles.textCard}>
              <span>{el.title}</span>
              <p>{el.subtitle}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
