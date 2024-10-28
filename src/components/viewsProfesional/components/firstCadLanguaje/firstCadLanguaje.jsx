import React, { useContext } from 'react';
import styles from './firstCadLanguaje.module.css';
import { DataContext } from '../../../../dataContext/dataContext';
import imagen from '../../../../utils/lenguage1-transformed.png'




export const FirstCadLanguaje = () => {


  const data = useContext(DataContext)

  const handleChangeContainer = data.view === 'skills'? styles.containerBackground:''
  const handleChangeBotonAltern = data.view === 'skills'? styles.botonsCircleAltern:''

  return (
    <div className={`${styles.container} ${handleChangeContainer} `}>
      <div>
        <img src={imagen} alt="ilustracion de la vista de lenguaje" />
      </div>
      <div className={styles.titles}>
        <span>{data.title}</span>
        <p>{data.subtitle}</p>
      </div>
      <div className={`${styles.botonsCircle} ${handleChangeBotonAltern}`}>
        {
          data.botonsCircle.map((el)=>(
            <div key={el.id} className={styles.boton}>
              {el.icon}
              <div>
                <span>{el.text}</span>
                <span>{el.level}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
