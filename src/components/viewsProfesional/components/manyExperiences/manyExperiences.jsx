import React, { useContext } from 'react';
import styles from './manyExperiences.module.css';
import { DataContext } from '../../../../dataContext/dataContext';


export const ManyExperiences = () => {

  const data = useContext(DataContext);

  if (!data || !Array.isArray(data) || data.lenght === 0) {
    return <div>Data no available</div>
  }

  console.log(data)

  return (
    <div className={styles.container}>
      {
        data.map((box)=>(
          <div key={box.id} className={styles.card}>
            <h1>{box.title}</h1>
            {
              box.items.map((el)=>(
                <div key={el.id} className={styles.subCard}>
                  <span>{el.id}</span>
                  <div className={styles.subCard_description}>
                    <span>{el.description}</span>
                    <span>{el.company} {el.date}</span>
                  </div>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}
